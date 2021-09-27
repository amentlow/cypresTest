// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test22', () => {

    it('Does not do much22!', () => {
      expect(true).to.equal(true)
    })
  })

  // describe('My First Test', () => {
  //   it('clicking "type" navigates to a new url', () => {
  //     cy.visit('https://example.cypress.io')
  
  //     cy.contains('type').click()
  
  //     // Should be on a new URL which includes '/commands/actions'
  //     cy.url().should('include', '/commands/actions')
  //   })
  // })



  describe('My Flaky tests spec', () => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    it('Flaky test', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
      var qqq = getRandomIntInclusive(2,4);

      // Should be on a new URL which includes '/commands/actions'
      expect(qqq).to.equal(2);

      // cy.url().should('include', '/commands/actions23232')
    })
  })
  
  