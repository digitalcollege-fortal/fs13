let meses = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
};

for (let i = 1; i <= 9; i++) {
    mes.innerHTML += `<option>${meses["0"+i]}</option>`;
}

for (let i = 10; i <= 12; i++) {
    mes.innerHTML += `<option>${meses[i]}</option>`;
}

for (let a = 2023; a <= 2030; a++) {
    ano.innerHTML += `<option>${a}</option>`
}