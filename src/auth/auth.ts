import * as google from 'auth/auth-config';
var GoogleStrategy: any = require('passport-google-oauth20').Strategy;

let setStrategy = (passport)=>{

    passport.serializeUser((user, done) => {
        done(null, user.id)
      });
      
      passport.deserializeUser(async (id, done) => {
        try {         
          done(null, id);
        } catch(err) {
          done(err);
        }
      });

    passport.use(new GoogleStrategy({
        clientID: google.config.google.clientID,
        clientSecret: google.config.google.clientSecret,
        callbackURL: google.config.google.callbackURL
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb();
    }
    ));
}

export {setStrategy}
