const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let sql = 'INSERT INTO tb_produto (categoria_id, nome, valor) VALUES';

for (let i = 0; i < 10000; i++) {
    let categoria_id = faker.number.int({min: 450, max: 471});
    let nome = faker.commerce.product();
    let valor = faker.commerce.price();
    
    sql += `('${categoria_id}', '${nome}', '${valor}'),`;
}

// //remover a ultima virgula
sql = sql.slice(0, -1);
database.executar(sql);






// TRUNCATE TABLE tb_carrinho;
// DELETE FROM tb_produto;
// DELETE FROM tb_categoria;
// DELETE FROM tb_cliente;
