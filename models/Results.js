const orm = require('../config/orm');

const Results = {
    all: cb => {
        orm.findAll('results', res => cb(res));
    },
    //by Format
    byValue: (table, col, param, vals, cb) =>{
        orm.findByValue('results', col, param, vals, res => cb(res));
    },
    //by User
    byUserAndFormat: (table, user, format, cb) =>{
        orm.findByUserAndFormat('results', user, format, res => cb(res));
    },
    create: (cols, vals, cb) => {
        orm.create('results', cols, vals, res => cb(res));
    },
    update: (objColVals, condition, cb) => {
        orm.update('results', objColVals, condition, res => cb(res));
    },
    delete: (condition, cb) => {
        orm.delete('results', condition, res => cb(res));
    }
};

module.exports = Results;