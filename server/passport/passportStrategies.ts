import { Strategy as LocalStrategy } from 'passport-local';
import { PassportStatic } from 'passport';

const Users = ['ricardo', 'perez', 'paredes', 'mi niña linda'];

function setLocalStrategy(passport: PassportStatic) {
  passport.use(new LocalStrategy(
    (username: string, password: string, done: Function) => {
      if (Users.find(u => u === username)) {
        return done(null, username);
      } else {
        return done(null, false);
      }
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(serializedUser, done) {
    /** 
     * TODO: find the use on the database and retreive user;
    */
    return done(null, serializedUser);
  });
}

export default setLocalStrategy;