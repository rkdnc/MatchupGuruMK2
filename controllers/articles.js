const db = require('../models/Articles');
const Sequelize = require('sequelize');

module.exports ={
    //find all articles
    findAll: (req, res) =>{
        // db.findAll({
        //     limit: 3,
        //     order: [ [ 'createdAt', 'DESC'] ]
        // }).then( articles => res.json(articles));
    },
    //create a new article
    create: (req, res) =>{
      //Stuff
    },
    //update an article
    update: (req, res) => {
        //Stuff
    },
    //delete an article
    delete: (req, res) =>{
        //stuff
    }
}