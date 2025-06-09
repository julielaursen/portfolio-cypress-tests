describe("Services Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/accessibility-example.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.dataCy("home-logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    it("Verify menu button calls overlay", () => {
      cy.checkMenuOverlay()
    })
  })

  it("verify footer links", () => {
    cy.checkFooter()
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("include", "portfolios/marketing-portfolio.html")
    cy.go("back")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("include", "portfolios/developer-portfolio.html")
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
  })
})
