const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3001;
const models = require("./models");
const keys = require("./config/keys").dbpw;


//DB connection

const connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  password: keys,
  database: "matchup_guru"
});

connection.connect();

//Add models here?

const passport = require("passport");
const session = require('express-session');

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets
app.use(express.static("client/build"));

//  // For Passport
// Commented out due to mern-mvc only supporting MongoDB and not MySQL
// app.use(session({ secret: 'changeThis',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// require('./config/passport.js')(passport,models.User);

// // Add routes, both API and view
// const routes = require("./routes")(passport);
// app.use('/',routes);




// Start the API server
app.listen(PORT, function() {
  console.log(`You have reached nirvana on port ${PORT}`);
});