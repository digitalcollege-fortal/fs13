const http = require('http');
const database = require('./conexao');

async function recepcao(req, res) {
    if (req.url === '/alunos') {
        let dados = await database.executar('SELECT * FROM tb_aluno');

        res.end(
            JSON.stringify(dados)
        );
        return;
    }

    if (req.url === '/alunos/5') {
        let dados = await database.executar('SELECT * FROM tb_aluno WHERE id=5');

        res.end(
            JSON.stringify(dados)
        );
        return;
    }

    res.end('Ola mundo');
}

http.createServer(recepcao).listen(8000);
