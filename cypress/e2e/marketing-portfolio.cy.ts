describe("Marketing Portfolio Page Tests", () => {
  beforeEach(() => {
    cy.visit("portfolios/marketing-portfolio.html")
  })

  it("Should display the header with the logo and navigation menu", () => {
    // Check the logo
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "../images/logo1.png")

    it("Verify menu button calls overlay", () => {
      cy.checkMenuOverlay()
    })
  })

  it("Should display the footer with social media icons and sitemap", () => {
    // Check social media icons
    cy.get(".social-media-icons img").should("have.length", 3)

    // Check GitHub icon
    cy.get(".social-media-icons img")
      .first()
      .should("have.attr", "alt", "GitHub Logo")
      .and("have.attr", "src", "../images/Github_black.png")

    // Check sitemap links
    cy.get(".sitemap ul li a").should("have.length", 4)
    cy.get(".sitemap ul li a")
      .first()
      .should("contain.text", "Marketing Portfolio")
  })

  it("Should display the contact information in the footer", () => {
    // Check contact email
    cy.get(".footer-email a")
      .should("be.visible")
      .and("have.attr", "href", "mailto:julielaursen1@gmail.com")

    // Check copyright text
    cy.get(".copy").should("contain.text", "2025 © Julie Coleman")
  })
})
