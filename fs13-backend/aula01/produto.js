function listarTodos() {
    return JSON.stringify([
        {
            id: 1,
            nome: 'Sapato',
            preco: 199
        },
        {
            id: 2,
            nome: 'Bone',
            preco: 19.87
        },
    ]);
}

function filtrar() {
    return "filtrar";
}

function destaques() {
    return "destaques";
}

function detalhes() {
    return "detalhes";
}

module.exports = {
    listarTodos,
    destaques,
    filtrar,
    detalhes,
};