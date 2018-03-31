const express = require('express');
const connection = require('./config/connection');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
require('dotenv').config();
//Initialize Express
const app = express();

//Set up body-parser
app.use(bodyParser());



const PORT = process.env.PORT || 3001;

//MySQL connection has been split into ./config/config.js to compartmentalize the code
connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }

    console.log(`You have connected to the database with threadID ${connection.threadId}`);
});
app.listen(PORT, () => console.log(`You have reached nirvana on port ${PORT}`))