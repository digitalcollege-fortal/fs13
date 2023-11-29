const {executar} = require('../src/batata-doce');

test('Teste da batata doce', () => {
    expect(executar(2)).toBe('Batata');
    expect(executar(5)).toBe('Doce');
    expect(executar(20)).toBe('Batata Doce');

    // expect(executar(13)).toBe('Doce');
    // expect(executar(44)).toBe('Batata');
    // expect(executar(35)).toBe('Batata Doce');
});

// par é Batata
// multiplo de 05 é Doce
// multiplo de 2 e 5 é Batata Doce

// 