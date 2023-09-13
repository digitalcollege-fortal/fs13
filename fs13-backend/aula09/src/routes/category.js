const express = require('express');
const Category = require('../entity/Category');

const router  = express.Router();

router.get('/categorias', async (req, res) => {
    let data = await Category.findAll(); //SELECT * FROM ... 
    
    res.send(data);
});

router.get('/categorias/:id', async (req, res) => {
    let data = await Category.findByPk(req.params.id);

    res.send(data);
});

// router.post('/categorias', async (req, res) => {

//     let data = await Category.create({
//         name: req.body.name,
//         description: req.body.description,
//     });

//     res.send(data);
// });


module.exports = router;
