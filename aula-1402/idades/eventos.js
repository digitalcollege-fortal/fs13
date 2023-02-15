let idade = prompt('Qual a sua idade');

if (idade < 14) {
    alert('Criança');
} else if (idade < 18) {
    alert('Adolescente');
} else if (idade < 60) {
    alert('Adulto');
} else {
    alert('Idoso');
}