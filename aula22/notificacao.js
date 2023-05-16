function addNotificacao(mensagem, color = 'success') {
    notificacao.classList = 'toast'; //reset nas classes do toast
    notificacao.classList.add('text-bg-'+color);

    //criando um elemento "Toast" do bootstrap
    let toast = bootstrap.Toast.getOrCreateInstance(notificacao);

    notificacao_texto.innerHTML = mensagem;

    //mandando mostrar o toast
    toast.show();
}

function addConfirmacao(mensagem) {
    //criando um elemento "Toast" do bootstrap
    let toast = bootstrap.Toast.getOrCreateInstance(confirmacao);

    confirmacao_texto.innerHTML = mensagem;

    //mandando mostrar o toast
    toast.show();
}
