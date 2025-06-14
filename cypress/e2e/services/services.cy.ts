describe("Services Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("/services")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "images/logo1.png")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should display all grid items with correct content", () => {
    cy.get(".grid-container .grid-item").should("have.length", 3)

    cy.get(".grid-container .grid-item")
      .first()
      .within(() => {
        cy.get("h3").should("contain.text", "Accessibility Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your website or application"
        )
      })

    cy.get(".grid-container .grid-item")
      .eq(1)
      .within(() => {
        cy.get("h3").should("contain.text", "Social Media Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your social media presence"
        )
      })

    cy.get(".grid-container .grid-item")
      .last()
      .within(() => {
        cy.get("h3").should("contain.text", "Website Usability Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your website to ensure it is user-friendly"
        )
      })
  })

  it("verify footer links", () => {
    cy.checkFooter()
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.go("back")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/developer-portfolio.html`)
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
  })
})
