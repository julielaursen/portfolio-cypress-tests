describe("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-other.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
    cy.get("h2").should("contain.text", "Social Media Audit")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should display the Document 1 thumbnail image with correct link and alt text", () => {
    cy.get(
      'a[href="https://docs.google.com/document/d/1RdgU066U7d6kQJeJhbpQ3MNySAGwlVa3x3AEZixajAE/preview"]'
    )
      .should("have.attr", "target", "_blank")
      .find("img.thumbnail")
      .should("be.visible")
      .and("have.attr", "src", "../images/thumbnail1.png")
      .and("have.attr", "alt", "Document 1")
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
    cy.go("back")
    cy.contains("Services").click({ force: true })
    cy.url().should("include", "services.html")
    cy.go("back")
  })
})
