const orm = require('../config/orm');

const Guru = {
    all: cb => {
        orm.findAll('gurus', res => cb(res))
    },
    byId: (param, vals, cb) =>{
        orm.findByValue('gurus', 'id', param, vals, res => cb(res));
    },
    byValue: (param, col, val, cb) => {
        orm.findByValue('gurus', col, param, val, res => cb(res));
    },
    create: (cols, vals, cb) =>{
        orm.create('gurus', cols, vals, res => cb(res));
    },
    update: (objColVals, condition, cb) => {
        orm.update('gurus', objColVals, condition, res => cb(res));
    },
    delete: (condition, cb) => {
        orm.delete('gurus', condition, res => cb(res));
    }
};

module.exports = Guru;