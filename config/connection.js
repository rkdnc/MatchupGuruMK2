require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DB_NAME,
        username: 'root',
        password: process.env.DB_PASS,
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        use_env_variable: process.env.JAWSDB_URL,
        dialect: 'mysql'
    }
}