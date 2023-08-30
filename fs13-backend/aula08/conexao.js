require('dotenv').config()

const mysql2 = require('mysql2/promise');


async function executar(sql) {
    let conexao = await mysql2.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: '3307',
    });
    //SHOW GLOBAL VARIABLES LIKE 'PORT';

    let [results] = await conexao.query(sql);

    return results;
}


module.exports = {
    executar
};