const express = require('express');
const db = require('./models');
const passport = require('passport');
const bodyParser = require('body-parser');
require('dotenv').config();
//Initialize Express
const app = express();
// const routes = require('./routes/api-routes')();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes/api-routes')(app);
// app.use('/', routes);



const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`You have reached nirvana on port ${PORT}`)
    })
});