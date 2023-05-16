function buscar() {
    if (cep.value.length !== 8) {
        cep.classList.add('is-invalid');
        return;
    }
    
    cep.classList.remove('is-invalid');

    //ei, vai lá buscar o resultado dessa requisição - promessas/promises
    fetch(`http://viacep.com.br/ws/${cep.value}/json`)
        .then(resposta => resposta.json())
        .then(conteudo => {
            //preenchimento automagico do formulario
            logradouro.value = conteudo.logradouro;
            // logradouro.setAttribute('disabled', 'disabled');
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            uf.value = conteudo.uf;
        })

    
}



