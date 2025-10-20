describe('Código duplicado - repetição de cenários', () => {

  beforeEach(() => {
    cy.visit('www.bing.com')
    cy.get("[role='img']")
      .should('be.visible')
  })
  it('Validar busca por "teste" na pagina do Bing', () => {
    cy.search('teste')
    cy.get("[type='search'][value='teste']")
      .should('be.visible')
  })
  it('Validar busca por "qa" na pagina do Bing', () => {
    cy.search('qa')
    cy.get("[type='search'][value='qa']")
      .should('be.visible')
  })
})
