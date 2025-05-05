describe("Developer Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/developer-portfolio")
  })

  it("Should display the header with the logo and navigation menu", () => {
    // Check the logo
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    // Open the navigation menu
    cy.get(".menu-btn").click()
    cy.get(".overlay").should("be.visible")
    cy.contains("Marketing Portfolio").should(
      "have.attr",
      "href",
      "marketing-portfolio.html"
    )
    cy.contains("UI/UX Portfolio").should(
      "have.attr",
      "href",
      "uiux-portfolio.html"
    )
    cy.contains("Developer Portfolio").should(
      "have.attr",
      "href",
      "developer-portfolio.html"
    )
    cy.contains("Service").should("have.attr", "href", "services.html")
    cy.contains("Resume").should("have.attr", "href", "resume.html")
    cy.get(".close-btn").click()
    cy.get(".overlay").should("not.be.visible")
  })
})
