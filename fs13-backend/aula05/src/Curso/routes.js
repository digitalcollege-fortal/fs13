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

    if (dados.length === 0) {
        res.status(404).end();
    }

    res.send(dados[0]);
});

app.post('/cursos', async (req, res) => {
    if (!req.body.nome) {
        //BAD REQUEST
        res.status(400).send({
            "erro": "Nome é obrigatorio"
        });
    }


    let {nome, carga_horaria} = req.body;

    let dados = await database.executar(
        `INSERT INTO tb_curso (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );

    req.body.id = dados.insertId;

    res.status(201); //CREATED
    res.send(req.body);
});

app.patch('/cursos/:id', async (req, res) => {
    let {nome, carga_horaria} = req.body;
    let id = req.params.id;

    await database.executar(
        `UPDATE tb_curso SET nome='${nome}', carga_horaria='${carga_horaria}' WHERE id=${id}`
    );

    req.body.id = id;

    res.send(req.body);
});

app.delete('/cursos/:id', async (req, res) => {
    let dados = await database.executar(`DELETE FROM tb_curso WHERE id=${req.params.id}`);

    if (dados.affectedRows === 0) {
        res.status(404).end();
    }

    res.status(204); //NO CONTENT
    res.end();
});

module.exports = app;
