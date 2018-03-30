const mysql = require("mysql");
require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(processs.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASS,
        database: 'matchup_guru'
    });
};

module.exports = connection;