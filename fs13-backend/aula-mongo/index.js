const express = require('express');
const produtoRouter = require('./routes/produto');

//inicia o express
const app = express();

//adiciona as rotas de produto
app.use(produtoRouter);

//subindo o servidor backend
app.listen(8002);