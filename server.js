const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require('./config/passport');
const router = require('express').Router;
require('dotenv').config();
//Initialize Express
const app = express();


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({secret: process.env.SECRET, resave: true, saveUnititialized: true}));
app.use(passport.initialize());
app.use(passport.session());
const routes = require('./routes/api-routes')(app);
app.use('/', routes)



const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`You have reached nirvana on port ${PORT}`)
    })
});