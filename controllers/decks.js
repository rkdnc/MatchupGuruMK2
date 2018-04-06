const db = require('../models');

module.exports = {
    findByFormat: function (req, res) {
        //Takes format as an argument and finds all decks in that format
        //Sends all decks in the current season as an object
        db.Deck.findAll({
            where: {
                format: req.params.format,
                season: req.params.season
            }
        }).then(dbFormat => res.json(dbFormat))
    },
    createDeck: function(req, res) {
        //accepts the passed in information to send to the database
        const name = req.body.deckName;
        const format = req.params.format;
        const season = req.params.season;
        const description = req.body.description;

        db.Deck.create({
            name: name,
            format: format,
            season: season,
            description: description
        }).then(dbResult => res.send(dbResult))
    },
    updateDeck: function(req, res){
        //Updates deck information, mainly for admins
        const deckUpdate = {
            name: req.body.name,
            description: req.body.description
        };
        db.Deck.update(deckUpdate, {where: {name: deckUpdate.name, format: req.params.format}}).then(updatedDeck => {
            console.log(updatedDeck);
        })
    }

};