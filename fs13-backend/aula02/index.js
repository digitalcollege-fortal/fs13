const http = require('http');
const db = require('./conexao');

async function recepcao (req, res) {
    if (req.url === '/cursos') {
        //buscando os dados no banco
        let cursos = await db.executar('SELECT * FROM tb_curso');

        //transformando os dados em json
        let json = JSON.stringify(cursos);

        //finalizando a resposta
        res.end(json);

        return;
    }

    if (req.url === '/categorias') {
        res.end('Listar categorias');
    } else if (req.url === '/produtos') {
        res.end('Listar produtos');
    } else {
        res.end('pagina nao encontrada');
    }
}

http.createServer(recepcao).listen(8000);
