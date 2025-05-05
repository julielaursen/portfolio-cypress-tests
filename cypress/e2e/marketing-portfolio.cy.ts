describe.skip("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-portfolio.html") // Adjust the URL if needed
  })

  it("Should display the header with the logo and navigation menu", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")
  })
})
