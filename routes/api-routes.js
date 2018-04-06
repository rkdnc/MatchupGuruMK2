const controllers = require('../controllers');
const path = require('path');
const router = require('express').Router();
const passport = require('../config/passport');



module.exports = app => {

    //Probably want to divide this by controller or by route, possibly further split the code, but I need a working product first
    //GET requests
    app.get('/api/results/:format/:season', controllers.Results.findByFormat);
    app.get('/stats/:user/:format', controllers.Results.findByUser);
    app.get('/decks/:format/:season', controllers.Decks.findByFormat);
    

    //POST requests
    app.post('/results/create/:format/:season', controllers.Results.createResult);
    app.post('/decks/:format/:season', controllers.Decks.createDeck);
    //Users
    app.post('/api/login', passport.authenticate('local'), controllers.Users.loginUser);
    app.post('/api/signup', controllers.Users.createUser);

    //PATCH requests
    app.patch('/decks/:format/:season', controllers.Decks.updateDeck)
};
