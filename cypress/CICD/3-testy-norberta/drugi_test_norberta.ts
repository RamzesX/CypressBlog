/// <reference types="cypress" />

describe('Czy strona się wyświetla2', function () {

  beforeEach(() => {
    cy.visit('http://techautority.tech/')
  })

it('find QA2', () => {
  cy.contains('QA');
})

it('loads examples2', () => {
  cy.get('#sub').click() // Right click on .menu
  cy.get('.close').click() // Right click on .menu
})
})