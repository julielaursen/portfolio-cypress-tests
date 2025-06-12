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
})
