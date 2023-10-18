const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../entity/User');

const router = express.Router();

router.post('/usuarios', async (req, res) => {
    req.body.password = await argon2.hash(req.body.password);

    let data = await User.create(req.body);

    res.status(201).send(data);
});

router.post('/login', async (req, res) => {
    let data = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!data) {
        // let x = await argon2.verify("$argon2id$v=19$m=65536,t=3,p=4$eA/hMNioYVwN7DYzDaSG3A$KXAHTDh1pKezphLzAM/lQFovrC5BHWeXg698aS12345", req.body.password);

        res.status(400).send({
            error: "User not found"
        });
        return;
    }

    let resultado = await argon2.verify(data.password, req.body.password);

    if (resultado === false) {
        res.status(400).send({
            error: "Password incorrect"
        });
        return;
    }

    //gerar o token com JWT
    let token = await jwt.sign({name: data.name}, 'qwe123');

    //add token ao usuario do banco
    User.update({token: token}, {
        where: {
            id: data.id
        }
    });

    res.send({
        token: token
    });
});

module.exports = router;