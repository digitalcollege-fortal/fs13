const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let nomes = faker.helpers.uniqueArray(
    faker.commerce.department,
    22
);

nomes.forEach(cada => {
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('${cada}');
    `);
});

// DELETE FROM tb_categoria WHERE id > 10;

// for (let i = 0; i < 100; i++) {
//     database.executar(`
//         INSERT INTO tb_categoria (nome) VALUES ('${nomes[i]}');
//     `);
// }



// node gerar-categorias.js

// SELECT * FROM tb_categoria;