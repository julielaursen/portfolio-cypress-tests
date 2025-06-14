describe("Marketing Portfolio Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("portfolios/marketing-portfolio.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    cy.get("h1").should("contain.text", "Marketing Portfolio")
  })

  it("Verify menu button calls overlay", () => {
    cy.get(".menu-btn").click()
    cy.get(".overlay").should("be.visible")
    cy.contains("Marketing Portfolio").click()
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.get(".menu-btn").click()
    cy.contains("UI/UX Portfolio").click()
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
    cy.go("back")
    cy.get(".menu-btn").click()
    cy.contains("Developer Portfolio").click()
    cy.url().should("eq", `${baseUrl}/portfolios/developer-portfolio.html`)
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

  it("Should display two marketing cards with correct titles", () => {
    cy.get("div.card-marketing").should("have.length", 2)

    cy.get("div.card-marketing")
      .eq(0)
      .within(() => {
        cy.contains(/Social Media/i).click()
      })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-social-media.html`)
    cy.go("back")

    cy.get("div.card-marketing")
      .eq(1)
      .within(() => {
        cy.contains(/Other/i).click()
      })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-other.html`)
  })

  it("verify footer links", () => {
    cy.checkFooter()

    cy.scrollTo("bottom")
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/developer-portfolio.html`)
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
