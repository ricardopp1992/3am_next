import { Strategy as LocalStrategy } from 'passport-local';
import { PassportStatic } from 'passport';

const Users = ['ricardo', 'perez', 'paredes', 'mi niña linda'];
const UsersObject = [{ email: 'ricardopp1992@gmail.com', id: 'ricardo' }];

function setLocalStrategy(passport: PassportStatic) {
  passport.use(new LocalStrategy(
    (username: string, password: string, done: Function) => {
      if (Users.find(u => u === username)) {
        return done(null, username);
      } else {
        return done(null, false, { message: 'wrong credentials' });
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
    const user = UsersObject.find(({id}) => id === serializedUser)
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  });
}

export default setLocalStrategy;