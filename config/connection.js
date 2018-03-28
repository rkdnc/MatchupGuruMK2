const mysql = require("mysql");
require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(processs.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
};

module.exports = connection;