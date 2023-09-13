const express = require('express');
const categoryRouter = require('../src/routes/category');

const app = express();

app.use(express.json());
app.use(categoryRouter);

app.get('/', async (req, res) => {
    res.end('API rodando');
});

app.listen(8000);

// npm install -g nodemon
// npx nodemon public\index.js
// node public\index.js