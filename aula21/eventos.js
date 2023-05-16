function filtrar() {
    //pega o tag da tbody/tabela
    const TABELA = document.getElementById('tabela-dados');

    //limpando os dados da tabela
    TABELA.innerHTML = '';

    //pegando valor digitado pelo usuario e deixando tudo minusculo
    let palavra = busca.value.toLowerCase();

    //percorrendo bebida por bebida para testar
    let resultado = bebidas.filter(function (cada) {
        //pegando o nome de cada bebida e deixando em minusculo
        let nomeBebida = cada.nome.toLowerCase();

        let descricao = cada.descricao.toLowerCase();

        //testando se a palavra digitada pelo usuario esta dentro do nome da bebida
        return nomeBebida.includes(palavra) || descricao.includes(palavra);
        // if (nomeBebida.includes(palavra) || descricao.includes(palavra)) {
        //     return true;
        // }
    
    });
    
    atualizarTabela(resultado);
}