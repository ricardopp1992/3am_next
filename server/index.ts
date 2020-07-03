import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import redis from 'redis';
import next from 'next';
import passport from 'passport';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
const RedisStore = require('connect-redis')(session);

import { NODE_ENV, PORT } from '../config';
import { IHandlerServer } from '../interfaces/IServer';
import setLocalStrategy from './passport/passportStrategies';
import setFacebookStrategy from './passport/passportFacebook';
import setGoogleStrategy from './passport/passportGoogle';
import authSocialRoutes from './routes/routes';
import localRoutes from './routes/local.routes';
import setTwitterStrategy from './passport/passportTwitter';

const dev = NODE_ENV !== 'production';
const app = next({dev});
const handler: IHandlerServer = app.getRequestHandler();
const redisClient = redis.createClient('redis://localhost:6379');

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
