describe('Visit helsingborg.se and write hello in search.', () => {
  it('Write hello', () => {
    cy.visit('https://helsingborg.se');

    cy.get('#searchkeyword-2')
      .type('hello')
      .wait(2000)
      .should('have.value', 'hello');
  })
})

describe('Visit helsingborg.se Bo, bygga och miljo .', () => {
  it('Visit Bo, bygga och miljo', () => {
    cy.visit('https://helsingborg.se');

    cy.get('#menu-item-561026 a')
      .click();

    cy.url()
      .should('include', '/bo-bygga-och-miljo');
  })
})

describe('Visit helsingborg.se Forskola och utbildning and check links', () => {
  it('Visit Forskola och utbildning and check if notice link is underlined', () => {
    cy.visit('https://helsingborg.se');

    cy.get('#menu-item-561027')
      .click();

    cy.get('div.notice a')
      .should('have.css', 'text-decoration')
      .and('match', /underlined/);
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})