const express = require('express');
const database = require('../../conexao');

const app = express.Router();

app.get('/cursos', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_curso');

    res.send(dados);
});

app.get('/cursos/:id', async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar(`SELECT * FROM tb_curso WHERE id=${id}`);

    res.send(dados[0]);
});

app.post('/cursos', async (req, res) => {
    let {nome, carga_horaria} = req.body;

    await database.executar(
        `INSERT INTO tb_curso (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );

    res.send(req.body);
});

app.patch('/cursos/:id', (req, res) => {
    res.end('Vai editar um curso existente');
});

app.delete('/cursos/:id', (req, res) => {
    res.end('Vai excluir um curso existente');
});

module.exports = app;
