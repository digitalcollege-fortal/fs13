const sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const connection = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'mysql', //qual o banco de dados
        host: 'localhost',
        port: process.env.DB_PORT
    }
);

module.exports = connection;
