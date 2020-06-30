import { Strategy as FacebookStrategy, Profile, VerifyFunction } from 'passport-facebook';
import { PassportStatic } from 'passport';

import validateSocialMediaUser from '../services/validateSocialMediaUser';
import { VerifyCallback } from 'passport-google-oauth2';
import { FACEBOOK_CLIENT_ID, FACEBOOK_SECRET } from '../../config';

function setFacebookStrategy(passport: PassportStatic) {
  passport.use(new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_SECRET,
      profileFields: [
        'id',
        'displayName',
        'name',
        'email'
      ],
      callbackURL: "http://localhost:3000/oauth/facebook/callback"
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      const email = profile.emails[0].value;
      const name = `${profile.name.givenName} ${profile.name.familyName}`;
      const userId = validateSocialMediaUser(accessToken, refreshToken, email, name);
      done(null, userId);
    }
  ));
}

export default setFacebookStrategy;
