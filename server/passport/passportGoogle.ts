import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';
import { Request } from 'express';

import validateSocialMediaUser from '../services/validateSocialMediaUser';
import { GOOGLE_CLIENT_ID, GOOGLE_SECRET } from '../../config';

function setPassportGoogle(passport) {
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: "http://localhost:3000/oauth/google/callback",
    passReqToCallback: true
  },
  function(request: Request, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    const email = profile.email;
    const name = `${profile.name.givenName} ${profile.name.familyName}`;
    const userId = validateSocialMediaUser(accessToken, refreshToken, email, name);
    return done(null, userId);
  }
  ));

}

export default setPassportGoogle;