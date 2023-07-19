//importando a biblioteca mysql2, que é a ponte entre o nodejs e o bando de dados
const mysql = require('mysql2/promise');

async function executar(query) {
    //await = esperar a conexao ser criada
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_escola',
        port: '3307' //SHOW GLOBAL VARIABLES LIKE 'PORT';
    });

    const [results] = await con.query(query);

    return results;
}

module.exports = {
    executar
};


//como sera executada
//executar('SELECT * FROM tb_curso');
