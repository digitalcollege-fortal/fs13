if (localStorage.getItem('darkmode') == 'true') {
    darkmode.checked = true; //habilita o switch/input pra ficar ativo
    ativarDarkmode(); //chama a função pra pintar o fundo da pagina
}

function ativarDarkmode() {
    //se o usuario estiver marcando o input switch entao
    if (darkmode.checked === true) {
        //vai adicionar a classe bg-dark e text-white no body
        document.body.classList.add('bg-dark', 'text-white');

        //vai alterar a cor do texto da tabela
        table.classList.add('table-dark'); 

        localStorage.setItem('darkmode', true);
    } else {
        //senao vai remover a classe bg-dark do body
        document.body.classList.remove('bg-dark', 'text-white');
        table.classList.remove('table-dark');
        
        localStorage.setItem('darkmode', false);
    }
}