function validarEnvio() {
    event.preventDefault(); //evitar o envio do formulario

    if (numero.value.length !== 19) {
        // numero.style.border = '1px solid red';
        numero.classList.add('is-invalid');
    }

    if (titular.value === '') {
        titular.classList.add('is-invalid');
    }

    if (mes.value === '') {
        mes.classList.add('is-invalid');
    }

    if (ano.value === '') {
        ano.classList.add('is-invalid');
    }

    if (cvv.value.length !== 3) {
        cvv.classList.add('is-invalid');
    }

    if (cpf.value === '') {
        cpf.classList.add('is-invalid');
    }

}

function alterarTitular () {
    card_titular.innerHTML = titular.value;
}


function alterarNumero() {
    numero.classList.remove('is-invalid');

    if (numero.value.length === 19) {
        numero.classList.add('is-valid');
    }
    
    //pega os valores digitados no input (numero) e leva até a div do cartão (card_numero)
    card_numero.innerHTML = numero.value;

    if (numero.value.substr(0, 1) === "4") {
        card_bandeira.innerHTML = '<img src="img/visa.png" width="40px">';
    } else if (numero.value.substr(0, 1) === "5") {
        card_bandeira.innerHTML = '<img src="img/master.png" width="40px">';
    }
}

function alterarMes() {
    mes.classList.remove('is-invalid');

    card_validade.innerHTML = mes.value + "/" + ano.value; 
}

function alterarAno() {
    ano.classList.remove('is-invalid');
    
    card_validade.innerHTML = mes.value + "/" + ano.value;
}

function alterarCPF() {
    cpf.classList.remove('is-invalid');

    let ultimoDigito = cpf.value.substr(-1);

    if (isNaN(ultimoDigito)) {
        let quantidade = cpf.value.length; 
        let resultado = cpf.value.substr(0, quantidade - 1);

        cpf.value = resultado;
    }

    if (cpf.value.length === 11) {
        cpf.classList.add('is-valid');
    }
}

function alterarCVV() {
    cvv.classList.remove('is-invalid');

    let ultimoDigito = cvv.value.substr(-1); //pegando a ultima letra/numero

    if (isNaN(ultimoDigito)) {
        let quantidade = cvv.value.length;
        let resultado = cvv.value.substr(0, quantidade - 1);

        cvv.value = resultado;
    }

    if (cvv.value.length === 3) {
        cvv.classList.add('is-valid');
    }

    card_cvv.innerHTML = cvv.value;
}