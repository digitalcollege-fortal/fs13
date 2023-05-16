fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes') //promise
    .then(resposta => resposta.json()) //então extrai o conteudo
    .then(conteudo => {
        /* FORMA 1 - Arrow Function */
        conteudo.map((valor) => {
            regiao.innerHTML += `<option value="${valor.id}">${valor.nome}</option>`
        });
    }); //então usa o conteudo

function buscarEstados() {
    //resetando o select
    estado.innerHTML = '<option selected>-- Selecione --</option>';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados?orderBy=nome`) 
    .then(resposta => resposta.json()) 
    .then(conteudo => {
        conteudo.map((valor) => {
            estado.innerHTML += `<option value="${valor.id}">${valor.nome}</option>`
        });
    }); 
}


function buscarCidades() {
    cidade.innerHTML = '<option selected>-- Aguarde --</option>';
    carregando.style.visibility = 'visible'; //vai aparecer o loading

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios`)
        .then(resposta => resposta.json())
        .then(conteudo => {
            carregando.style.visibility = 'hidden'; //vai esconder o loading
            cidade.innerHTML = '<option selected>-- Selecione --</option>';

            conteudo.map(cada => {
                cidade.innerHTML += `<option>${cada.nome}</option>`;
            })
        });
}


/* FORMA 2 - Function anonima */
// regioes.map(function(valor) {
//     regiao.innerHTML += `<option>${valor}</option>`
// });

/* FORMA 3 - function externa */
// function addOption(valor) {
//     regiao.innerHTML += `<option>${valor.nome}</option>`; 
// }

// regioes.map(addOption);
