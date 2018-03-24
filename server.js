const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3001;
// const models = require("./models");
const dotenv = require("dotenv").config();

//DB connection
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(processs.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
};

//MySQL connection
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
 
  console.log(`You have connected to the database with threadID ${connection.threadId}`);
});

const passport = require("passport");
const session = require('express-session');

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets
app.use(express.static("client/build"));

//Import Passport routes here

/*For Passport
Commented out due to mern-mvc only supporting MongoDB and not MySQL
app.use(session({ secret: 'changeThis',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport.js')(passport,models.User);

Add routes, both API and view
const routes = require("./routes")(passport); */

//Add all other routes here

// Start the API server
app.listen(PORT, function() {
  console.log(`You have reached nirvana on port ${PORT}`);
});