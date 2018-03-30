const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    function(username, password, done){
        User.findOne({ username: username}, function(err, user){
            if (err) {return done(err); }
            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        });
    }
));

//The login form should be submitted to the server via POST method, using authenticate()

/* app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
    falureRedirect: '/login',
    failureFlash: true })
); */