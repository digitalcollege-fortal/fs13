
const router = require('express').Router();
const database = require('../connection/database');
const {ObjectId} = require('mongodb');

router.get('/produtos', async (req, res) => {
    //carrega a coleção de produtos
    const produtos = (await database()).collection('produtos');

    //filtra todos
    let dados = await produtos.find().toArray();
    
    res.send(dados);
});

router.get('/produtos/:id', async (req, res) => {
    const produtos = (await database()).collection('produtos');

    let dados = await produtos.find({_id: new ObjectId(req.params.id)}).toArray();
    
    res.send(dados[0]);
});

router.post('/produtos', async (req, res) => {
    const produtos = (await database()).collection('produtos');

    try {
        let dados = await produtos.insertOne(req.body);
    } catch (e) {
        res.status(400).send({
            message: 'Problema na request, tente novamente'
        });
        return;
    }


    res.status(201).send(dados);
});

module.exports = router;