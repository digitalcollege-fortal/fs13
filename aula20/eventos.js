const URL_API = 'https://api.digitalcollege.com.br';

function cadastrar() {
    fetch(URL_API + '/veiculos', {
        method: 'POST',
    });
}

function listar() {
    fetch(URL_API + '/veiculos', {
        method: 'GET',
    });
}

function editar() {
    fetch(URL_API + '/veiculos', {
        method: 'PUT',
    });
}

function excluir() {
    fetch(URL_API + '/veiculos', {
        method: 'DELETE',
    });
}