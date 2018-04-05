const db = require('../models');
// const sequelize = require('sequelize');

module.exports = {
    findByformat: function (req, res) {
        // console.log('controller test')
        // res.send('test controller');
        //Takes the format as an argument and finds results based on that format
        db.Result.findAll({
            where: {
                format: req.params.format,
                season: req.params.season
            }
        }).then(dbFormat => {
            res.json(dbFormat);
        })

        //for each results in format
        //count each unique deck name
        //send the result with the most entries
        //send an object of each deck's name with the amount of wins to be put into a chart by ChartJS
        //Render all decks with win % in a list
    },
    findByUser: function(req, res) {
        //Takes the current user and finds all results for that user and format
        db.Result.findAll({
            where: {
                user: req.params.user,
                format: req.params.format
            },
            order: [['updatedAt', 'DESC']]
        }).then(dbUserResults => {
            let results = dbUserResults;
            res.send(results);
        })
    },
    createResult: function(req, res) {
        const deckName = req.body.deckName;
        const oppDeckName = req.body.oppDeckName;
        const format = req.params.format;
        const wins = req.body.wins;
        const losses = req.body.losses;
        const draw = req.body.draw;
        const user = req.body.user;
        const eventType = req.body.eventType;
        const season = req.params.season;
        db.Result.create({
            deckName: deckName,
            oppDeckName: oppDeckName,
            format: format,
            wins: wins,
            losses: losses,
            draw: draw,
            user: user,
            eventType: eventType,
            season: season
        }).then(dbResult => res.send(dbResult))
        //takes the passed in information and creates a new result
        //Will probably need to be the bulkCreate from Sequelize
        //accepts multple form entries to assign data from fields to be sent to the database
    }
    // //Update could go here, but we won't allow users to edit records yet
    // delete: (req, res) => {
    //     //deletes record based on ID
    //     db.Results.destroy({
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(dbResult => console.log(dbResult));
    //     //Possibly will not be implemented, but route will exist for admins
    // }
};