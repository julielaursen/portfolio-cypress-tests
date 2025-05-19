// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-axe"

// Extend Cypress' Chainable interface to include the custom command
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      dataCy(value: string): Chainable<JQuery<HTMLElement>>
      checkMenuOverlay(): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add("dataCy", (value: string) => {
  return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add("checkMenuOverlay", () => {
  cy.get(".menu-btn").click()
  cy.get(".overlay").should("be.visible")
  cy.contains("Marketing Portfolio").click()
  cy.url().should("include", "portfolios/marketing-portfolio.html")
  cy.go("back")
  cy.get(".menu-btn").click()
  cy.contains("UI/UX Portfolio").click()
  cy.go("back")
  cy.get(".menu-btn").click()
  cy.contains("Developer Portfolio").click()
  cy.url().should("include", "portfolios/developer-portfolio.html")
  cy.go("back")
  cy.get(".menu-btn").click()
  cy.contains("Service").click()
  cy.url().should("include", "services.html")
  cy.go("back")
  cy.get(".menu-btn").click()
  cy.contains("Resume").click()
  cy.url().should("include", "resume.html")
  cy.go("back")
  cy.get(".menu-btn").click()
  cy.get(".close-btn").click({ force: true })
  cy.get(".overlay").should("not.be.visible")
})
