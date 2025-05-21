describe("Services Page Tests", () => {
  beforeEach(() => {
    cy.visit("/services")
  })

  it("Should display the header with the logo and navigation menu", () => {
    // Check the logo
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "images/logo1.png")

    it("Verify menu button calls overlay", () => {
      cy.checkMenuOverlay()
    })
  })

  it("Should display all grid items with correct content", () => {
    cy.get(".grid-container .grid-item").should("have.length", 3)

    cy.get(".grid-container .grid-item")
      .first()
      .within(() => {
        cy.get("h3").should("contain.text", "Accessibility Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your website or application"
        )
      })

    cy.get(".grid-container .grid-item")
      .eq(1)
      .within(() => {
        cy.get("h3").should("contain.text", "Social Media Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your social media presence"
        )
      })

    cy.get(".grid-container .grid-item")
      .last()
      .within(() => {
        cy.get("h3").should("contain.text", "Website Usability Audit")
        cy.get(".grid-item-body").should(
          "contain.text",
          "I will review your website to ensure it is user-friendly"
        )
      })
  })

  it("Should test accessibility example", () => {
    cy.visit("portfolios/accessibility-example.html")
    cy.get("iframe").first().should("be.visible")
    cy.get("a[href='intentionally-bad-site.html']")
      .should("be.visible")
      .and("have.attr", "target", "_blank")
    cy.get("iframe").next().should("be.visible")
    cy.get("iframe").next().should("be.visible")
  })

  it("verify footer links", () => {
    cy.checkFooter()
  })
})
