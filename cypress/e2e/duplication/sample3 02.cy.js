describe('Code duplication bad practice - repetitive actions and assertions', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('Pesquisa um elemento por 3 vezes', () => {
    Cypress._.times(3, () => {
    cy.search01('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)
    })
  })
})


  it('Validar 05 vezes o click em um botão', () => {
    Cypress._.times(5, () => {
    cy.get('button.enviar').click();
    cy.wait(500);
  })
})


it('Validar exibição de mensagem de sucesso após enviar o formulário', () => {
  cy.get('#enviar').click();                        // clica no botão
  cy.get('.mensagem-sucesso').should('be.visible'); // verifica se a mensagem apareceu
});





it('Validar exibição de mensagem de sucesso após enviar o formulário', () => {
  cy.get('#enviar').click();
  cy.get('.mensagem-sucesso', { timeout: 10000 }) // espera até 10s a exibição do elemento
    .should('be.visible');
});


//Exemplo 01
cy.get('.mensagem').should('have.text', 'Bem-vindo, João!');

//Exemplo 02
cy.url().should('eq', 'https://meu-site.com/dashboard');

//Exemplo alternativa 01
cy.get('.mensagem').should('contain', 'Bem-vindo'); // simples contain
cy.get('.mensagem').invoke('text').should('match', /Bem-vindo, .+!/); // Regex Bem-vindo, x!


//Exemplo alternativa 02
cy.url().should('include', '/dashboard'); // verifica apenas a rota
cy.url().should('match', /\/dashboard\/?$/); // regex dashboard



