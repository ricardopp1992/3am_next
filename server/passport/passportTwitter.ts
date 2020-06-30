import { Strategy as TwitterStrategy } from 'passport-twitter';
import { PassportStatic } from "passport";

import validateSocialMediaUser from '../services/validateSocialMediaUser';
import { TWITTER_CLIENT_ID, TWITTER_SECRET } from '../../config';

function setTwitterStrategy(passport: PassportStatic) {
  passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CLIENT_ID,
    consumerSecret: TWITTER_SECRET,
    callbackURL: 'http://localhost:3000/oauth/twitter/callback',
    userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    includeEmail: true
  },
  function(token, tokenSecret, profile, done) {
    const email = profile.emails[0].value || '';
    const name = `${profile.name.givenName} ${profile.name.familyName}`;
    const userId = validateSocialMediaUser(token, tokenSecret, email, name);
    return done(null, userId);
  }
  ));
}

export default setTwitterStrategy;