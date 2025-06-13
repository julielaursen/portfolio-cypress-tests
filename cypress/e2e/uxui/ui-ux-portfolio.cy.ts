describe("Developer Portfolio Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("portfolios/uiux-portfolio.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    cy.get("h1").should("contain.text", "UI/UX Portfolio")
  })

  it("Should display two grid elements and verify the first has the correct link and content", () => {
    cy.get(".grid-item").should("have.length", 2)

    cy.get(".grid-item")
      .children()
      .first()
      .should(
        "have.attr",
        "href",
        "../portfolios/responsive-design-portfolio.html"
      )
      .within(() => {
        cy.get(".grid-item-header h3").should(
          "contain.text",
          "UXUI-1373: Responsive Design"
        )
        cy.get(".grid-item-body").should(
          "contain.text",
          "Created responsive websites using HTML, CSS, and JavaScript."
        )
      })

    cy.get(".grid-item")
      .first()
      .within(() => {
        cy.get("a.grid-item-link")
          .should(
            "have.attr",
            "href",
            "../portfolios/responsive-design-portfolio.html"
          )
          .click()
      })

    cy.url().should(
      "eq",
      `${baseUrl}/portfolios/responsive-design-portfolio.html`
    )
  })

  it("Verify menu button calls overlay", () => {
    cy.get(".menu-btn").click()
    cy.get(".overlay").should("be.visible")
    cy.contains("Marketing Portfolio").click()
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.go("back")
    cy.get(".menu-btn").click()
    cy.contains("UI/UX Portfolio").click()
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
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

  it("verify footer links", () => {
    cy.checkFooter()

    cy.scrollTo("bottom")
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.go("back")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/developer-portfolio.html`)
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
