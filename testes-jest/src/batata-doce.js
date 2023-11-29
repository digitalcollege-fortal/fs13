// function executar(numero) {
//     if (numero % 5 === 0) {
//         return "Batata Doce";
//     } 
    
//     if (numero % 2 === 0) {
//         return "Doce";
//     } 
    
//     return "Batata";
// }

function isBatataDoce(numero) {
    return numero % 5 === 0;
}

function isDoce(numero) {
    return numero % 2 !== 0 && !isBatataDoce(numero);
}

function isBatata(numero) {
    return !isBatataDoce(numero) && !isDoce(numero);
}

function executar(numero) {
    let resultado = [];

    if (numero % 2 === 0) {
        resultado.push("Batata");
    }

    if (numero % 5 === 0) {
        resultado.push("Doce");
    }

    return resultado.join(" ");
}


module.exports = {executar};