const express = require('express');
const database = require('../../conexao');

const app = express.Router();

const TABLE = 'tb_disciplina';

app.get('/disciplinas', async (req, res) => {
    let dados = await database.executar(`SELECT * FROM ${TABLE}`);

    res.send(dados);
});

app.get('/disciplinas/:id', async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar(`SELECT * FROM ${TABLE} WHERE id=${id}`)

    if (dados.length === 0) {
        res.status(404).end();
        return;
    }

    res.end(dados[0]);
});

app.post('/disciplinas', async (req, res) => {
    let {nome, carga_horaria} = req.body;

    let resultado = await database.executar(`
        INSERT INTO ${TABLE} (nome, carga_horaria)
        VALUES ('${nome}', '${carga_horaria}')
    `);

    req.body.id = resultado.insertId;

    res.status(201).send(req.body);
});

app.patch('/disciplinas/:id', async (req, res) => {
    let {nome, carga_horaria} = req.body;

    await database.executar(`
        UPDATE ${TABLE} SET nome='${nome}', carga_horaria='${carga_horaria}'
        WHERE id='${req.params.id}'
    `);

    req.body.id = req.params.id;

    res.send(req.body);
});

app.delete('/disciplinas/:id', async (req, res) => {
    await database.executar(`DELETE FROM ${TABLE} WHERE id=${req.params.id}`);

    res.status(204).send();
});

module.exports = app;
