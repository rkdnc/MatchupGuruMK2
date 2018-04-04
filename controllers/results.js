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
            let results = dbFormat;
            res.send(results);
        })

        //for each results in format
        //count each unique deck name
        //send the result with the most entries
        //send an object of each deck's name with the amount of wins to be put into a chart by ChartJS
        //Render all decks with win % in a list
    }
    // findByUser: (format, user, req, res) => {
    //     //Takes the current user and finds all results for that user and format
    //     db.findAll({
    //         where: {
    //             format: req.body.format,
    //             user: req.body.user
    //         }
    //     }).then(dbUserResults => {
    //         let results = dbUserResults;
    //         res.send(results);
    //         //for the current user
    //         //Display all results where the username of the entry result matches the currently logged in user
    //         //order by newest first
    //     })
    // },
    // // createResult: (format, req, res) => {
    // //     console.log(res)
    // //     //takes the passed in information and creates a new result
    // //     //Will probably need to be the bulkCreate from Sequelize
    // //     //accepts multple form entries to assign data from fields to be sent to the database
    // // },
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
