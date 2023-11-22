describe('Teste da pagina inicial', () => {
    it ('testando que a pagina funciona no desktop', () => {
        cy.visit('http://localhost:3000');

        cy.contains('HOME').should('visible');
    });

    it ('testando que quando eu acesso usando o celular nao aparece o HOME', () => {
        cy.visit('http://localhost:3000');

        cy.viewport('iphone-6');

        cy.contains('HOME').should('not.exist');
    })
})