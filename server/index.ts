import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import next from 'next';
import passport from 'passport';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import axios from 'axios';
const RedisStore = require('connect-redis')(session);

import {
  NODE_ENV,
  PORT,
  STRAPI_CMS,
  STRAPI_PASSWORD,
  STRAPI_USER
} from '../config';
import { IHandlerServer } from '../interfaces/IServer';
import setLocalStrategy from './passport/passportStrategies';
import setFacebookStrategy from './passport/passportFacebook';
import setGoogleStrategy from './passport/passportGoogle';
import authSocialRoutes from './routes/routes';
import localRoutes from './routes/local.routes';
import setTwitterStrategy from './passport/passportTwitter';
import redisClient from './services/promisifyRedis';
import { getRedis, setRedis } from './services/promisifyRedis';

const dev = NODE_ENV !== 'production';
const app = next({dev});
const handler: IHandlerServer = app.getRequestHandler();


setLocalStrategy(passport);
setFacebookStrategy(passport);
setGoogleStrategy(passport);
setTwitterStrategy(passport);

(async () => {
  try {
    await app.prepare();
    const server = express();

    /** SET UP */
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(session({
      store: new RedisStore({ client: redisClient }),
      resave: false,
      saveUninitialized: true,
      secret: 'keyboard cat'
    }));
    server.use(passport.initialize());
    server.use(passport.session());
    server.use(flash());
    server.use(async (req, res, next) => {
      try {
        const strapiUserToken = await getRedis('strapiUserToken');
        if (!strapiUserToken) {
          const { data } = await axios.post(`${STRAPI_CMS}/auth/local`, {
            identifier: STRAPI_USER,
            password: STRAPI_PASSWORD
          });
          await setRedis('strapiUserToken', data.jwt);
        }
      } catch (err) {
        console.error('Error: ', err.message);
      }
      next();
    });

    /** ROUTES */
    server.use('/', localRoutes);
    server.post('/auth', passport.authenticate(
      'local',
      { failureRedirect: '/signin', successRedirect: '/', failureFlash: true })
    );
    server.use('/oauth', authSocialRoutes);

    /** NEXT JS */
    server.all('*', (req: Request, res: Response, next: NextFunction) => {
      return handler(req, res);
    });

    server.listen(PORT, () => console.log(`Custom Next server listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
})();
