Cypress.Commands.add('datacy', (value) => {
  cy.get(`[data-cy="${value}"]`)
})

Cypress.Commands.add('Login', () => {
  cy.server()
  // cy.route('POST','/auth/login').as('login')
  cy.route('GET','/Applied').as('applied')
  cy.visit('/')
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.datacy('email').type('iamGod@gmail.com')
  cy.datacy('password').type('iamGod')
  cy.datacy('submit').click().wait('@applied')
})
