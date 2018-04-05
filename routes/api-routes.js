const controllers = require('../controllers');
const path = require('path');
const router = require('express').Router();



module.exports = app => {
    app.get('/api/results/:format/:season', controllers.Results.findByformat);
    app.post('/results/create/:format/:season', controllers.Results.createResult);
    app.get('/stats/:user/:format', controllers.Results.findByUser)
};
