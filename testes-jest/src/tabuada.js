function soma(n1, n2) {
    let produto = n1 + n2; 

    return parseFloat(produto.toFixed(7));
}

module.exports = {
    soma
};