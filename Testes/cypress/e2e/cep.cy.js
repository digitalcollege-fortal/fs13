describe('Testar pagina de endereço', () => {
    it ('Caminho feliz CEP que existe', () => {
        cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep');

        cy.get('#cep').type('60352590').blur();

        cy.wait(2000);

        cy.get('#logradouro').should('have.value', 'Rua Barca Velha');
        cy.get('#bairro').should('have.value', 'Quintino Cunha');
        cy.get('#cidade').should('have.value', 'Fortaleza');

        // 60352590
        // Rua Barca Velha
        // Quintino Cunha
        // Fortaleza
        // CE
    });
});