describe("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-social-media.html")
  })

  it("Should display the header, subheaders, logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    cy.get("h2").should(
      "contain.text",
      "Content for Social Media Posts @DevOpsDays Austin"
    )
    cy.get("h2").should("contain.text", "Content Examples")
    cy.get("h2").should("contain.text", "Post Examples")
    cy.get("h2").should("contain.text", "Example Social Media Calendar")
  })

  it("Should have a DevOpsDays Austin LinkedIn link that opens in a new tab", () => {
    cy.get(".devopsdays-linkedin-container a.cta-button")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/devopsdays-austin/"
      )
      .and("have.attr", "target", "_blank")
      .and(
        "have.attr",
        "aria-label",
        "Visit the DevOpsDays Austin LinkedIn profile"
      )
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should display all marketing images, verify they are visible, and have alt text", () => {
    cy.get('img[src^="../images/marketing-images/image"]').each(($img) => {
      cy.wrap($img)
        .should("be.visible")
        .and("have.attr", "alt")
        .and("not.be.empty")
    })
  })

  it("Should display all marketing posts, verify they are visible, and have alt text", () => {
    cy.get('img[src^="../images/marketing-images/linkedinpost"]').each(
      ($img) => {
        cy.wrap($img)
          .should("be.visible")
          .and("have.attr", "alt")
          .and("not.be.empty")
      }
    )
  })

  it("Should display the calendar section", () => {
    cy.get(".calendar").should("be.visible")
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
