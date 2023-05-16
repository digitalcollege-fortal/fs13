let contatos = [
    {
        nome: 'Vitor',
        telefone: '85 9 8671-1234'
    },
    {
        nome: 'Ualison',
        telefone: '85 9 8671-1444'
    },
];

for (let n = 0; n <= 4; n++) {
    lista.innerHTML += "<li>" + contatos[n].nome + ': ' + contatos[n].telefone + "</li>";
}
