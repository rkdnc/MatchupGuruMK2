const controllers = require('../controllers');
const path = require('path');
const router = require('express').Router();



module.exports = app => {
    app.get('/api/results/:format/:season/', controllers.Results.findByformat);
};
