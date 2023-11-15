describe('Testar preenchimento ouvidoria', () => {
    it ('Caminho feliz', () => {
        cy.visit('https://digitalcollege.com.br');

        cy.contains('Mais').click();

        //pegar o ultimo elemento da lista, capturar o href dele e redirecionar
        cy.get('[id="menu-item-3547"] > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href);

                cy.origin(href, () => {
                    cy.contains('Não quero me identificar').click();

                    cy.get('textarea').type('Teste');

                    cy.contains('Finalizar').click();

                    cy.contains('Obrigado');
                })
            });

        
    });
});