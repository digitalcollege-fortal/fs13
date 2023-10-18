const express = require('express');
const categoryRouter = require('../src/routes/category');
const customerRouter = require('../src/routes/customer');
const userRouter = require('../src/routes/user');

const app = express();

app.use(express.json());
app.use(categoryRouter);
app.use(customerRouter);
app.use(userRouter);

app.get('/', async (req, res) => {
    res.end('API rodando');
});

app.listen(8000);

// npm install -g nodemon
// npx nodemon public\index.js
// node public\index.js