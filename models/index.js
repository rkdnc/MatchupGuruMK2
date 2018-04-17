'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + './../config/connection.js')[env];
var config = require('../config/connection')[env];
var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else if (process.env.JAWSDB_URL) {
//   var sequelize = new Sequelize(`mysql:${process.env.JAWSDB_URL}`);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
var sequelize = new Sequelize('mysql://i0q6skcxum4q5cqx:m3n18v0yooulsy7l@ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/odgdf1fi2e1ebxwi');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
