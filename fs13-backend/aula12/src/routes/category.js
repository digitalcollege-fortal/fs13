const express = require('express');
const Category = require('../entity/Category');
const {validSecurity} = require('../security/security');

const router  = express.Router();

router.get('/categorias', validSecurity, async (req, res) => {
    let data = await Category.findAll(); //SELECT * FROM ... 
    
    res.send(data);
});

router.get('/categorias/:id', validSecurity, async (req, res) => {
    let data = await Category.findByPk(req.params.id);

    res.send(data);
});

router.post('/categorias', validSecurity, async (req, res) => {
    let data = await Category.create(req.body); 

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
