let contatinhos = [
    {
        id: 1,
        nome: 'Albert',
        telefone: '85 9 8612-1234'
    },
    {
        id: 2,
        nome: 'Junior',
        telefone: '85 9 8876-3456'
    },
    {
        id: 3,
        nome: 'Flavio',
        telefone: '85 9 1234-3456'
    },
    {
        id: 4,
        nome: 'Henrique',
        telefone: '85 9 8875-3456'
    },
    {
        id: 5,
        nome: 'Firmino',
        telefone: '85 9 8875-3456'
    }
];



function mostrarNome(cadaContato) {
    return `
        <tr>
            <td>${cadaContato.id}</td>
            <td>${cadaContato.nome}</td>
            <td>${cadaContato.telefone}</td>
        </tr>
    `
}

// mostrarNome(contatinhos[0]);
// mostrarNome(contatinhos[1]);
// mostrarNome(contatinhos[2]);
// mostrarNome(contatinhos[3]);
// mostrarNome(contatinhos[4]);


function listar() {
    document.title = "Listar Contatos";

    conteudo.innerHTML = `
        <table class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>${contatinhos.map(mostrarNome).join('')}</tbody>
        </table>
    `;
    
}
