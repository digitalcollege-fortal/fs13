function tokenIsValid(req) {
    let tokens = [
        'jordana01',
        'niely_gold',
        'beatriz_09',
    ];

    return tokens.includes(req.headers.token);
}

function errorPermission(res) {
    res.status(401).send({
        error: 'Sem permissao'
    });
}

function validSecurity(req, res, next) {
    if (!tokenIsValid(req)) {
        errorPermission(res);
        return;
    }

    next();
}

module.exports = {
    validSecurity,
};