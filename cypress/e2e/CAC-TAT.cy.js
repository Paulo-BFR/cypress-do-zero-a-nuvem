describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Paulo{enter}') 
    
    cy.get('#lastName').type('Rubens{enter}')

    cy.get('#email').type('paulorubens@gmail.com')

    cy.get(':nth-child(3) > input').click();

    cy.get('#email-checkbox').click();

    cy.get('#open-text-area').type('Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applicationsCypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.', {delay:0})

    cy.contains('button', 'Enviar').click()
    
    cy.get('.success').should('be.visible')

    
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName')
    .type('Paulo{enter}')
    
    cy.get('#lastName')
    .type('Rubens{enter}')

    cy.get('#email')
    .type('paulorubens@gmail')
    .should('be.visible')

    cy.get(':nth-child(3) > input').click();

    cy.get('#email-checkbox').click();

    cy.get('#open-text-area').type('Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applicationsCypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.', {delay:0})

    cy.contains('button', 'Enviar').click()
    

    cy.get('.error').should('be.visible')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName')
    .type('Paulo{enter}')
    
    cy.get('#lastName')
    .type('Rubens{enter}')

    cy.get('#email')
    .type('paulorubens@gmail')
    .should('be.visible')


    cy.get(':nth-child(3) > input').click();

    cy.get('#phone-checkbox').check().should('be.checked', 'telefone')

    cy.contains('button', 'Enviar').click()    

    cy.get('.error').should('be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .type('Paulo{enter}')
    .should('have.value', 'Paulo')
    
    cy.get('#firstName').should('have.value', 'Paulo').clear()

    cy.get('#lastName')
    .type('Rubens{enter}')
    .should('have.value', 'Rubens')

    cy.get('#lastName').should('have.value', 'Rubens').clear()

    cy.get('#email')
    .type('paulorubens@gmail')
    .should('be.visible')
    .should('have.value', 'paulorubens@gmail')

    cy.get('#email').should('have.value', 'paulorubens@gmail').clear()
    
    cy.get('#email').should('have.value', '')

    cy.get(':nth-child(3) > input').click();

    cy.get('#phone-checkbox').click();

    cy.get('#open-text-area').type('Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applicationsCypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.', {delay:0})

    cy.contains('button', 'Enviar').click()    

    cy.get('.error').should('be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.fillMandatoryFieldsAndSubmit()

      cy.get('select').select('Blog')

      cy.should('have.value', 'blog')


      cy.get('#product').select('blog')

      cy.should('have.value', 'blog')


      
      cy.get('#product').select(2)

      cy.should('have.value', 'cursos')


      cy.get('input[type="radio"]').check('elogio').should('be.checked', 'elogio')

      cy.get('input[type="radio"]').wrap({product: 'feedback'})

  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.fillMandatoryFieldsAndSubmit()

      cy.get('select').select('Blog')

      cy.should('have.value', 'blog')


      cy.get('#product').select('blog')

      cy.should('have.value', 'blog')


      
      cy.get('#product').select(2)

      cy.should('have.value', 'cursos')


      cy.get('input[type="radio"]').check('elogio').should('be.checked', 'elogio')

      cy.get('input[type="radio"]').wrap({product: 'feedback'})

      cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json').then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.fillMandatoryFieldsAndSubmit()

      cy.get('select').select('Blog')

      cy.should('have.value', 'blog')


      cy.get('#product').select('blog')

      cy.should('have.value', 'blog')


      
      cy.get('#product').select(2)

      cy.should('have.value', 'cursos')


      cy.get('input[type="radio"]').check('elogio').should('be.checked', 'elogio')

      cy.get('input[type="radio"]').wrap({product: 'feedback'})

      cy.fixture('/example.json').as("exampleFile")
      cy.get('input[type="file"]')
      .selectFile('@exampleFile')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.fillMandatoryFieldsAndSubmit()

      cy.get('select').select('Blog')

      cy.should('have.value', 'blog')


      cy.get('#product').select('blog')

      cy.should('have.value', 'blog')


      
      cy.get('#product').select(2)

      cy.should('have.value', 'cursos')


      cy.get('input[type="radio"]').check('elogio').should('be.checked', 'elogio')

      cy.get('input[type="radio"]').wrap({product: 'feedback'})

      cy.get('a').should('have.attr', 'href', 'privacy.html')

  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
      //contains('a', 'Politica de privacidade')
      cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
      
      cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })

})