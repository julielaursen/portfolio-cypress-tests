describe("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-other.html)
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    it("Verify menu button calls overlay", () => {
      cy.checkMenuOverlay()
    })
  })

  it("verify footer links", () => {
    cy.checkFooter()

    cy.scrollTo("bottom")
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("include", "portfolios/marketing-portfolio.html")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("include", "portfolios/developer-portfolio.html")
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
