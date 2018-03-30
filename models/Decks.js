const orm = require('../config/orm');

const Deck = {
    all: cb => {
        orm.findAll('decks', res => cb(res));
    },
    byValue: (table, col, param, vals, cb) =>{
        orm.findByValue('decks', col, param, vals, res => cb(res));
    },
    create: (cols, vals, cb) => {
        orm.create('decks', cols, vals, res => cb(res));
    },
    update: (objColVals, condition, cb ) => {
        orm.update('decks', objColVals, condition, res => cb(res));
    },
    delete: (condition, cb) => {
        orm.delete('decks', condition, res => cb(res));
    }
};

module.exports = Deck;