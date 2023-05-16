let ladoA = prompt('Informe o lado A');
let ladoB = prompt('Informe o lado B');
let ladoC = prompt('Informe o lado C');


let nome = 'Albert'; //string
let idade = 56; //int
let saldo = -8773.89; //float
let status = false; 

saldo = 'zerado';


// 03 lados iguais: equilatero
// 02 lados iguais: isosceles
// 03 lados diferentes: escaleno

if (ladoA == ladoB && ladoB == ladoC) {
    alert('Equilatero');
} else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
    alert('Escaleno');
} else {
    alert('Isosceles');
}