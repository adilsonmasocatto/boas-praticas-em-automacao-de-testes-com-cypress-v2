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
