const controllers = require('../controllers');
const path = require('path');
const router = require('express').Router();
const passport = require('../config/passport');



module.exports = app => {

    //Probably want to divide this by controller or by route, possibly further split the code, but I need a working product first
    //Article routes
    app.get('/api/articles', controllers.Articles.findAll);
    app.get('/api/articles/recent', controllers.Articles.findLastThree);
    app.post('/api/articles',controllers.Articles.createNewArticle);
    app.delete('/api/articles/:id', controllers.Articles.delete);
    app.patch('/api/articles/:id', controllers.Articles.update);

    //Deck Routes
    app.get('/api/decks/:format/:season', controllers.Decks.findByFormat);
    app.post('/api/decks/:format/:season', controllers.Decks.createDeck);
    app.patch('/api/decks/:format/:season', controllers.Decks.updateDeck);

    //Results routes
    app.get('/api/results/:format/:season', controllers.Results.findByFormat);
    app.get('/api/stats/:user/:format', controllers.Results.findByUser);
    app.post('/api/results/:format/:season', controllers.Results.createResult);

    //User routes
    app.post('/api/login', passport.authenticate('local'), function(req, res){
        res.send('You ar elogged in!');
    });
    app.post('/api/signup', controllers.Users.createUser);
    app.patch('/api/updateuser', controllers.Users.updateUser);
    app.delete('/api/updateuser', controllers.Users.deleteUser)

};
