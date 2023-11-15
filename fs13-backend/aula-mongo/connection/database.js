const mongodb = require('mongodb').MongoClient;

const database = async (name) => {
    //inicia o cliente do mongodb
    const con = new mongodb('mongodb://0.0.0.0:27017');

    //aqui ele aguarda se conectar
    await con.connect();

    //retorna o banco de dados selecionado
    return con.db('db_fs13');
};

//const database = (new mongodb('mongodb://localhost:27017@user:pass')).db('db_fs13');

module.exports = database;