const express = require('express');
const db = require('./models');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
require('dotenv').config();
//Initialize Express
const app = express();

//Set up body-parser
app.use(bodyParser());



const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(() => {app.listen(PORT, () => console.log(`You have reached nirvana on port ${PORT}`))})