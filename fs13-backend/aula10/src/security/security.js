const User = require("../entity/User");

async function tokenIsValid(req) {
    // let tokens = [
    //     'jordana01',
    //     'niely_gold',
    //     'beatriz_09',
    // ];

    let user = await User.findAll({
        where: {
            token: req.headers.token
        }
    });

    if (user.length === 0) {
        return false;
    }

    return user;

    // return tokens.includes(req.headers.token);
}

function errorPermission(res) {
    res.status(401).send({
        error: 'Sem permissao'
    });
}

async function validSecurity(req, res, next) {
    let user = await User.findOne({
        where: {
            token: req.headers.token
        }
    })

    if (!await tokenIsValid(req)) {
        errorPermission(res);
        return;
    }

    console.log('------------------------------------------------');
    console.log(`${user.name} acessou a URL ${req.url} no dia 2023-10-03`);
    console.log('------------------------------------------------');


    next();
}

module.exports = {
    validSecurity,
};