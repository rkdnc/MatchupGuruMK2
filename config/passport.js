const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy(
    {
        usernameField: 'username'
    },
    function(username, password, done){
        //When a user tries to sign in, execute this:
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser) {
            //If tere is no user with that username
            if (!dbUser) {
                return done (null, false, {
                    message: 'Incorrect username.'
                });
            }
            //If there is a user with that username, but the password is incorrect:
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            //If both checks pass, return the user
            return done(null, dbUser);
        });
    }
));

//Sequelize needs to serialize and deserialize the user to maintain state across HTTP requests, this is boilerplate.

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

module.exports = passport;