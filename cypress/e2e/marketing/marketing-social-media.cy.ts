describe("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-social-media.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should verify the DevOpsDays link works", () => {
    cy.contains("a", "DevOpsDays")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://devopsdays.org/events/2025-austin/welcome/"
      )
  })

  it("Should verify the Social Media link works", () => {
    cy.contains("a", "Follow on LinkedIn")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/devopsdays-austin/"
      )
  })

  it("verify footer links", () => {
    cy.checkFooter()

    cy.scrollTo("bottom")
    cy.contains("Marketing Portfolio").click({ force: true })
    cy.url().should(
      "eq",
      "https://julielaursen.github.io/portfolios/marketing-portfolio.html"
    )
    cy.go("back")
    cy.contains("UI/UX Portfolio").click({ force: true })
    cy.url().should(
      "eq",
      "https://julielaursen.github.io/portfolios/uiux-portfolio.html"
    )
    cy.go("back")
    cy.contains("Developer Portfolio").click({ force: true })
    cy.url().should(
      "eq",
      "https://julielaursen.github.io/portfolios/developer-portfolio.html"
    )
    cy.g
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
