const db = require('../models/Results');

module.exports = {
    findAll: (req, res) => {
        //Finds all results, may not be implemented.
    },
    findByformat: (req, res) => {
        //Takes the format as an argument and finds results based on that format
    },
    findByUser: (req, res) => {
        //Takes the current user and finds all results for that user and format
    },
    createResult: (req, res) => {
        //takes the passed in information and creates a new result
    },
    //Update could go here, but we won't allow users to edit records yet
    delete: (req, res) => {
        //deletes record based on ID
    }
}