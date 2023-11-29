const {soma} = require('../src/tabuada');

test('Soma de 2 e 2 deve dar 4', () => {
    expect(soma(9, 9)).toBe(18);

    expect(soma(10, -10)).toBe(0);

    expect(soma(2.3, 2.4)).toBe(4.7);

    expect(soma(8.355, 10.6789)).toBe(19.0339);
});