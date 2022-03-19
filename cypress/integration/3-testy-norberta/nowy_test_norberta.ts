/// <reference types="cypress" />
type Url = string;

describe('Czy strona się wyświetla', function () {

  beforeEach(() => {
    const url: Url = 'http://techautority.tech/'
    cy.visit(url)
  })

it('find QA', () => {
  cy.contains('QA');
})

it('loads examples', () => {
  cy.get('#sub').click() // Right click on .menu
  cy.get('.close').click() // Right click on .menu
})
})
