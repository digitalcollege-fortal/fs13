let resposta01 = prompt("Oi sumida");

if (resposta01 == "oi") {
    alert("Eita como é fria");
} else {
    alert("Tudo bem");
}


let idade = prompt("Qual a sua idade?");


if (idade < 14) {
    alert('Criança');
} else {
    if (idade < 18) {
        alert('Adolescente');
    } else {
        if (idade < 60) {
            alert('Adulto');
        } else {
            alert('Idoso');
        }
    }
}