const passport = require('passport');
const connection = require('./connection');
const bcrypt = require('bcrypt-nodejs');
const db = require('../models/Gurus');



//I don't get Passport...

// module.exports = function(passport, user) {
//     const Guru = user;
//     const LocalStrategy = require('passport-local').Strategy;
//     //Session setup
//     //-------------------------------

//     //serialize and deserialize users
//     passport.serializeUser((user, done) => done(null, user.id));

//     // passport.deserializeUser((id, done) =>{
//     //     connection.query('SELECT * FROM gurus WHERE ID= '+ id, (err, rows) => done(err, rows[0]));
//     // });
//     passport.deserializeUser((id, done) =>{
//         db.byId(id, id, res => cb(res))
//     });

//     //Local signup
//     passport.use('local-signup', new LocalStrategy({
//         usernameField: 'username',
//         passwordField: 'password',
//         passReqToCallback: true 
//     },
//     function(req, username, password, done) {
//         console.log(req.body);
//         const generateHash = function(password) {
//             return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
//         };

//         Guru.byValue(email, email)
//     }
// ))
// }
