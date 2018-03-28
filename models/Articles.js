const orm = require('../config/orm');

const Article = {
    //might need to sort by date, or add ORM function to view 3 most recent
    all: cb => {
        orm.findAll('articles', res => cb(res));
    },
    create:  (cols, vals, cb) => {
        orm.create('articles', cols, vals, res => cb(res));
    },
    update: (objColVals, condition, cb) => {
        orm.update('articles', objColVals, condition, res => cb(res));
    },
    delete: (condition, cb) =>{
        orm.delete('articles', condition, res => cb(res));
    }
};

module.exports = Article;