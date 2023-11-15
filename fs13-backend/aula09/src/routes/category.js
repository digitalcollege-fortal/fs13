const express = require('express');
const Category = require('../entity/Category');
const {validSecurity} = require('../security/security');

const router  = express.Router();

//--------------------
const mongodb = require('mongodb').MongoClient;

const database = async (name) => {
    //inicia o cliente do mongodb
    const con = new mongodb('mongodb://0.0.0.0:27017');

    //aqui ele aguarda se conectar
    await con.connect();

    //retorna o banco de dados selecionado
    return con.db('db_fs13');
};
//-----------------


router.get('/categorias', validSecurity, async (req, res) => {
    let data = await Category.findAll(); //SELECT * FROM ... 
    
    res.send(data);
});

router.get('/categorias/:id', validSecurity, async (req, res) => {
    let data = await Category.findByPk(req.params.id);

    res.send(data);
});

router.post('/categorias', async (req, res) => {
    let data = req.body;

    const col = ((await database()).collection('produtos'));
    
    await col.insertOne(req.body);
    //let data = await Category.create(req.body); 

    res.send(data);
});

router.delete('/categorias/:id', validSecurity, async (req, res) => {
    let linhasExcluidas = await Category.destroy({
        where: {
            id: req.params.id
        }
    });

    let status = linhasExcluidas === 0 ? 404 : 204;
    res.status(status).end();
    
    // let cat = await Category.findByPk(req.params.id);
    // cat.destroy();
});

router.patch('/categorias/:id', validSecurity, async (req, res) => {
    // let cat = await Category.findByPk(req.params.id);

    // cat.name = req.body.name;
    // cat.description = req.body.description;
    // cat.save();

    // res.send(cat);

    await Category.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(req.body);
});


module.exports = router;
