describe("Services Page Tests", () => {
  beforeEach(() => {
    cy.visit("/services")
  })

  it("Should display the header with logo and navigation links", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "images/logo1.png")

    cy.get(".overlay-content a").should("have.length.greaterThan", 0)
    cy.get(".overlay-content a")
      .first()
      .should("contain.text", "Marketing Portfolio")
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

  it("Should display the footer with social media icons and sitemap", () => {
    cy.get(".social-media-icons img").should("have.length", 3)
    cy.get(".social-media-icons img")
      .first()
      .should("have.attr", "alt", "GitHub Logo")
    cy.get(".sitemap ul li a").should("have.length", 4)
    cy.get(".sitemap ul li a")
      .first()
      .should("contain.text", "Marketing Portfolio")
  })

  it("Should display the copyright and contact information in the footer", () => {
    cy.get(".footer-email a")
      .should("be.visible")
      .and("have.attr", "href", "mailto:julielaursen1@gmail.com")

    cy.get(".copy").should("contain.text", "2025 © Julie Coleman")
  })
})
