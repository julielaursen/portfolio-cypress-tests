describe("Developer Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/responsive-design-portfolio.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
  })
})
