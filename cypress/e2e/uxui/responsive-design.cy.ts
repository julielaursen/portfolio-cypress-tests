describe("Developer Portfolio Page Tests", () => {
  const baseUrl = Cypress.config("baseUrl")

  beforeEach(() => {
    cy.visit("portfolios/responsive-design-portfolio.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
    cy.contains("h3", "Responsive Design Portfolio").should("be.visible")
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Should display the large screen mockup image with correct alt text", () => {
    it("Should display all mockup images with correct src and alt text", () => {
      cy.get("img.mockup-image").should("have.length", 3)

      cy.get("img.mockup-image")
        .eq(0)
        .should("have.attr", "src", "../images/mockup-large.jpg")
        .and("have.attr", "alt", "Large Screen Mockup")

      cy.get("img.mockup-image")
        .eq(1)
        .should("have.attr", "src", "../images/mockup-middle.jpg")
        .and("have.attr", "alt", "Middle Screen Mockup")

      cy.get("img.mockup-image")
        .eq(2)
        .should("have.attr", "src", "../images/mockup-mobile.jpg")
        .and("have.attr", "alt", "Mobile Screen Mockup")
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
