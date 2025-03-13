Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = { 
    firstName: 'P',
    lastName: 'R',
    email: 'pr@gmail.com'
    }) => {
    cy.get('#firstName').type(data.firstName) 
    
    cy.get('#lastName').type(data.lastName)

    cy.get('#email').type(data.email)

    cy.get(':nth-child(3) > input').click();

    cy.get('#email-checkbox').click();

    cy.get('#open-text-area').type('teste');

    cy.contains('button', 'Enviar').click()    
    
    cy.get('.success').should('be.visible')
})