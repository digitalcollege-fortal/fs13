function enviar() {
    event.preventDefault();

    contatinhos.push({
        id: contatinhos.length + 1,
        nome: nome.value, //input
        telefone: telefone.value
    });

    alert('Pronto!');
}

function cadastro() {
    document.title = "Novo Contato";

    conteudo.innerHTML = `
        <form onsubmit="enviar()">
            <label>Nome</label>
            <input id="nome" class="form-control mb-3" placeholder="Nome">

            <label>Telefone</label>
            <input id="telefone" class="form-control mb-3" placeholder="Telefone">

            <button class="btn btn-primary">Enviar</button>
        </form>
    `;
} 
