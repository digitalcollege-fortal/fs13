const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let sql = 'INSERT INTO tb_cliente (nome) VALUES';

for (let i = 0; i < 10000; i++) {
    sql += `('${faker.person.fullName()}'),`;
}


//remover a ultima virgula
sql = sql.slice(0, -1);

database.executar(sql);
