it('testando a pagina de politica de privacidade de forma idependente', () =>  {

    cy.visit('./src/privacy.html')

    cy.get('#title').should('be.visible')

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
}) 