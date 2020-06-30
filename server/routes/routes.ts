import express, { Router } from 'express';
import passport from 'passport';

const authSocialRoutes: Router = express.Router();

/** FACEBOOK */
authSocialRoutes.get('/facebook', passport.authenticate('facebook'));

authSocialRoutes.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/signup', successRedirect: '/' })
);

/** GOOGLE */
authSocialRoutes.get('/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'email'
  ]
}));

authSocialRoutes.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' })
);

/** TWITTER */
authSocialRoutes.get('/twitter',
  passport.authenticate('twitter'));

authSocialRoutes.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login', successRedirect: '/' })
);

export default authSocialRoutes;