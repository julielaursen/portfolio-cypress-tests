describe("Services Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("portfolios/accessibility-example.html")
  })

  it("Should display the headers and subheaders with the logo and navigation menu", () => {
    cy.dataCy("home-logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should test accessibility examples", () => {
    cy.get("iframe").first().should("be.visible")
    cy.get("a[href='intentionally-bad-site.html']")
      .should("be.visible")
      .and("have.attr", "target", "_blank")
    cy.get("iframe").next().should("be.visible")
    cy.get("iframe").next().should("be.visible")
  })

  it("Should verify the Accessibility links works", () => {
    cy.contains("a", "Lighthouse")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://developer.chrome.com/docs/lighthouse/overview"
      )
    cy.contains("a", "VoiceOver")
      .should("be.visible")
      .and(
        "have.attr",
        "href",
        "https://support.apple.com/en-ca/guide/voiceover/welcome/mac"
      )
    cy.contains("a", "WAVE")
      .should("be.visible")
      .and("have.attr", "href", "https://wave.webaim.org/")
    cy.contains("a", "NVDA")
      .should("be.visible")
      .and("have.attr", "href", "https://www.nvaccess.org/about-nvda/")
  })

  it("Should display a responsive table section", () => {
    cy.get("div.table-responsive").should("be.visible")
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
