
let bebidas = [];

function editarBebida(id) {
    form_titulo.innerHTML = 'Editar Bebida';

    fetch(`http://localhost:8000/bebidas/${id}`)
        .then(res => res.json())
        .then(dados => {
            //preenchimento do form
            input_nome.value = dados.nome;
            input_quantidade.value = dados.quantidade;
            input_foto.value = dados.foto;
            input_descricao.value = dados.descricao;
        })
    
    form_cadastro.setAttribute('onsubmit', `salvarBebida(${id})`);
}

//confirmar o editar
async function salvarBebida(id) {
    event.preventDefault();

    await fetch(`http://localhost:8000/bebidas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: input_nome.value,
            quantidade: input_quantidade.value,
            descricao: input_descricao.value,
            foto: input_foto.value,
        })
    });

    addNotificacao('Bebida editada');

    fechar_cadastro.dispatchEvent(new Event('click'));

    form_cadastro.reset();

    buscarBebidas();
} 


async function addBebida() {
    event.preventDefault();

    if (input_nome.value === '') {
        addNotificacao('Nome invalido', 'danger');
        return;
    }


    await fetch('http://localhost:8000/bebidas', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: input_nome.value,
            descricao: input_descricao.value,
            quantidade: input_quantidade.value,
            foto: input_foto.value
        })
    });

    //alert('Pronto, bebida cadastrada');
    addNotificacao('Pronto, bebida cadastrada');


    //limpar os campos do form
    form_cadastro.reset();

    //vai simular que o usuario ta clicando no x pra fechar o formulario
    //ou seja, dispara um evento de click
    fechar_cadastro.dispatchEvent(new Event('click'));

    //atualizar a tabela do HTML
    buscarBebidas();
}

function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img width="100%" src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista) {
    document.getElementById('tabela-dados').innerHTML = '';

    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                    <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                        <img src="${cada.foto}" width="50px">
                    </a>
                </td>
                <td>
                    <a onclick="editarBebida(${cada.id})" href="#cadastro" data-bs-toggle="offcanvas" class="btn btn-outline-warning btn-sm">Editar</a>
                    <button onclick="confirmarExcluir(${cada.id})" class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function buscarBebidas() {
    //vamo buscar na API os dados das bebidas
    fetch('http://localhost:8000/bebidas')
        .then(res => res.json())
        .then(dados => {
            bebidas = dados;
            atualizarTabela(dados)
        });
}


function confirmarExcluir(id) {
    addConfirmacao('Tem certeza?');

    confirmacao_sim.setAttribute('onclick', `excluirBebida(${id})`);
}

async function excluirBebida(id) {
    addNotificacao('Bebida excluida');

    //vai fazer a requisicao, e vai esperar que ela termine
    await fetch('http://localhost:8000/bebidas/'+id, {
        method: 'DELETE'
    });

    buscarBebidas();
}

//assim que atualizar a pagina essa funcao vai ser executada
buscarBebidas();