function welcome(nome) {
    nome = nome.trim();

    let resultado = nome.split(" ").map((cada) => {
        let primeiraLetra = cada.charAt(0).toUpperCase();

        let restante = cada.slice(1).toLowerCase();

        return primeiraLetra+restante;
    })

    return "Bem vindo " + resultado.join(' ');
}

module.exports = {welcome};