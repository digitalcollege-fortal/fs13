describe('Teste da pagina inicial', () => {
    it ('testando que a pagina funciona no desktop', () => {
        cy.visit('http://localhost:3000');

        cy.contains('HOME').should('exist');

        // garantir que todo o menu esta visivel (item por item)
        // garantir que o input de pesquisar existe
        // garantir que o botao de pesquisar existe
        // garantir que a logo esta visivel
        // garantir que a navbar está na cor #666
        // garantir que o texto do menu é branco

        cy.get('.menu a').should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('.container').should('have.css', 'background-color', 'rgb(102, 102, 102)');


        cy.get('.menu-mobile').should('not.exist');
    });

    it ('testando que quando eu acesso usando o celular', () => {
        cy.visit('http://localhost:3000');

        cy.viewport('iphone-6');

        cy.contains('HOME').should('not.exist');
    })
})