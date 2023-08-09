const express = require('express');
const database = require('./conexao');
const curso = require('./src/Curso/routes.js');
const disciplina = require('./src/Disciplina/routes.js');

const app = express();
app.use(express.json()); //a API vai trabalhar com JSON

app.use(curso);
app.use(disciplina);

app.get('/', (req, res) => {
    res.end('Ola mundo');
});

app.get('/alunos', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_aluno');

    res.json(dados);
});

app.get('/alunos/:id', async (req, res) => {
    let id = req.params.id;

    let dados = await database.executar(
        `SELECT * FROM tb_aluno WHERE id=${id}`
    );

    res.json(dados);
})

app.post('/alunos', async (req, res) => {
    let {nome, data_nascimento, cpf} = req.body;
    // let nome = req.body.nome;
    // let data_nascimento = req.body.data_nascimento;
    // let cpf = req.body.cpf;

    await database.executar(
        `INSERT INTO tb_aluno (nome, data_nascimento, cpf)
        VALUES ('${nome}', '${data_nascimento}', '${cpf}')`
    );

    res.end('deu rock');
});


app.listen(8000, () => {
    console.log('API rodando');
});
