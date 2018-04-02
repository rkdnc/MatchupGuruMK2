const db = require('../models/decks');

module.exports = {
    findByFormat: (format, season, req, res) => {
        //Takes format as an argument and finds all decks in that format
        //Sends all decks in the current season as an object
    },
    createDeck: (req, res) => {
        //accepts the passed in information to send to the database
    },
    updateDeck: (req, res) => {
        //Updates deck information, mainly for admins
    },
    deleteDeck: (req, res) => {
        ///deletes record based on ID
    }

}