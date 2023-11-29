const {welcome} = require('../src/welcome');

test('que a funcao welcome retorna Bem vindo', () => {
    //caminho feliz
    expect(welcome('Claudino')).toBe('Bem vindo Claudino');

    //caminhos não felizes
    expect(welcome('claudino')).toBe('Bem vindo Claudino');
    expect(welcome('CLAUDINO')).toBe('Bem vindo Claudino');
    expect(welcome('cLAUDiNO')).toBe('Bem vindo Claudino');

    expect(welcome('claudino ')).toBe('Bem vindo Claudino');

    
    expect(welcome('francisco claudino')).toBe('Bem vindo Francisco Claudino');
});