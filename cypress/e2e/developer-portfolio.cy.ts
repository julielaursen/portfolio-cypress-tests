describe("Developer Portfolio Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("portfolios/developer-portfolio")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should display the GitHub calendar", () => {
    // Check the GitHub calendar container
    cy.get(".calendar").should("be.visible")
  })

  it("Should display GitHub stats, most used languages, and streak stats", () => {
    // Check GitHub stats
    cy.get(".github-stats img")
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "github-readme-stats.vercel.app/api")

    // Check most used languages
    cy.get(".most-used-languages img")
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "github-readme-stats.vercel.app/api/top-langs")

    // Check GitHub streak stats
    cy.get(".github-streak img")
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "streak-stats.demolab.com")
  })

  it("Should display the repositories section with correct links", () => {
    cy.get(".gitub-repos h2").should(
      "contain.text",
      "My Github Repositories for Automation Tests"
    )

    // Check the first repository link
    cy.get(".grid-container .grid-item")
      .first()
      .find("a")
      .should(
        "have.attr",
        "href",
        "https://github.com/julielaursen/portfolio-cypress-tests"
      )
      .and("have.attr", "target", "_blank")

    // Check the second repository link
    cy.get(".grid-container .grid-item")
      .eq(1)
      .find("a")
      .should(
        "have.attr",
        "href",
        "https://github.com/julielaursen/portfolio-playwright-tests"
      )
      .and("have.attr", "target", "_blank")
  })

  it("verify footer links", () => {
    cy.checkFooter()

    cy.scrollTo("bottom")
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/marketing-portfolio.html`)
    cy.go("back")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/uiux-portfolio.html`)
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should("eq", `${baseUrl}/portfolios/developer-portfolio.html`)
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
