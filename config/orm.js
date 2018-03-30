const mysql = require('mysql');
const connection = require('./connection')
//This ORM should be helper functions for the SQL queries, to easily import to the models for cleaner code.

//Loops through an array and creates an array of question marks to be inserted into SQL queries
function printQuestionMarks(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push('?');
    }
    return array.toString();
}
//Turns key/value pairs to SQL syntax
function objectToSql(object) {
    let array = [];

    for (let key in object) {
        let value = object[key];
        //Skipping hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            //If a string has spaces add quotation marks
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '"' + value + '"';
            }
        }
        array.push(key + '=' + value);
    }
    return array.toString();
}
/*This object contains all of our SQL statement functions
Please to not use template literals in SQL queries, they will be vulnerable to SQL injections. */

const orm = {
    //Finding all items in a given table
    findAll: function (table, cb) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    /* Finding an item by it's parameter. Mainly used to find individual formats for results, or pull for each user */
    findByValue: function (table, col, param, vals, cb) {
        let queryString = 'SELECT ' + col + ' FROM ' + table + ' WHERE ' + param + '= ' + vals + ';';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    /* Find an item by both the user and the format */
    findByUserAndFormat: function (table, user, format, cb) {
        let queryString = 'SELECT * FROM ' + table + ' WHERE username=' + user + ' AND format=' + format + ';';
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    /* Creating new results.
    Table would be one of articles, decks, gurus, or results.
    columns would be derived from the table, so you know what column to update. Values are what is provided from the client. CB is just a callback function*/
    create: function (table, cols, vals, cb) {
        let queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    /* Allows something to be updated. 
    Table would be one of articles, decks, gurus, or results.
    columns would be derived from the table, so you know what column to update. ObjColVals are the column values, which are parsed to strings via the helper function. Condition is where the data should be changed (via ID usually). CB is just a callback function. */
    update: function (table, objColVals, condition, cb) {
        let queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSQL(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    /* Allows data to be deleted, which should be used sparingly. Table would be one of articles, decks, gurus, or results. Condition is where the data should be changed (via ID usually). CB is just a callback function */
    delete: function (table, condition, cb) {
        let queryString = 'DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition

        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;