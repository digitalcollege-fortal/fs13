const express = require('express');
const {validSecurity} = require('../security/security');

const router = express.Router();

router.get('/customers', validSecurity, async(req, res) => {
    res.send([
        'Bob',
        'Carlos',
        'Maria',
    ]);
});

module.exports = router;