let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 390ml',
        quantidade: 12,
        foto: ''
    },
    {
        id: 2,
        nome: 'Ypioca',
        descricao: 'Prata 960ml',
        quantidade: 24,
        foto: ''
    },
    {
        id: 3,
        nome: 'Vodka Slova',
        descricao: 'Garrafa 1Lt',
        quantidade: 6,
        foto: ''
    },
    {
        id: 4,
        nome: 'Vinho São Braz',
        descricao: 'O vinho do santo forte, garrafão 5L',
        quantidade: 18,
        foto: ''
    },
    {
        id: 5,
        nome: 'Sapupara',
        descricao: 'Celular 450ml',
        quantidade: 20,
        foto: ''
    },
    {
        id: 6,
        nome: 'Cachaça Caranguejo',
        descricao: 'Picthulinha',
        quantidade: 12,
        foto: ''
    },
    {
        id: 7,
        nome: 'Kaiser',
        descricao: 'Lata 395ml',
        quantidade: 12,
        foto: ''
    },
    {
        id: 8,
        nome: 'Vinho Vale Real',
        descricao: 'Garrafa 900ml',
        quantidade: 12,
        foto: ''
    },
    {
        id: 9,
        nome: 'Guaraná Wilson',
        descricao: 'Garrafa 2L',
        quantidade: 6,
        foto: ''
    },
    {
        id: 10,
        nome: 'Skol',
        descricao: 'Roberto Claudio',
        quantidade: 24,
        foto: ''
    },
    {
        id: 11,
        nome: 'Colonial',
        descricao: 'Garrafa 960ml',
        quantidade: 20,
        foto: ''
    },
    {
        id: 12,
        nome: 'Rum Montila',
        descricao: 'Garrafa 900ml',
        quantidade: 24,
        foto: ''
    },
];



bebidas.map((cada) => {
    document.getElementById('tabela-dados').innerHTML += `
        <tr>
            <td>${cada.id}</td>
            <td>${cada.nome}</td>
            <td>${cada.descricao}</td>
            <td>${cada.quantidade}</td>
            <td>${cada.foto}</td>
            <td>
                <button class="btn btn-outline-warning btn-sm">Editar</button>
                <button class="btn btn-outline-danger btn-sm">Excluir</button>
            </td>
        </tr>
    `;
})