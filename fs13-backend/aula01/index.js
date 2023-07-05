//importando a biblioteca nativa do node, para gerenciar requisicoes HTTP
const http = require('http');

// const {listarTodos, destaques, detalhes, filtrar} = require('./produto');
// const {listarTodos, destaques, detalhes, filtrar} = require('./categoria');
const produto = require('./produto');
const categoria = require('./categoria');

const PORTA = 8000;

function recepcao(req, res) {
    if (req.url === '/produtos') {
        res.end(produto.listarTodos());
    } else if (req.url === '/categorias') {
        res.end(categoria.listarTodos());
    } else {
        res.end('Pagina nao encontrada');
    }
}

//criando um servidor web http
http.createServer(recepcao).listen(PORTA);

