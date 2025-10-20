describe('Browser testing bad practice - anchor href', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('Directs the user to the corresponding page when clicking on the links', () => {
    cy.contains ('.nav a', 'Signup')
      .should('have.attr', 'href', '/signup')
      .and('not.have.attr', 'target')
    cy.contains ('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
      .and('not.have.attr', 'target')
  })
})
