describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("https://julielaursen.github.io/")
  })

  it("Verify page title is correct", () => {
    cy.contains("h1", "Julie Coleman")
  })

  it("Verify introduction", () => {
    cy.contains("h2", "Introduction")
    cy.get("div.introduction").find("p").should("have.length", 3)
  })

  it("Verify grid and its items", () => {
    cy.get("div.grid-container").find(".grid-item").should("have.length", 6)
  })

  it.skip("Verify search box functionality", () => {
    cy.get('[data-testid="tab-1"]').should("have.class", "active")
    cy.get('input[type="search"]').type("Cypress")
    cy.get('[data-testid="tab-2"]').should("have.class", "active")
    cy.contains("Cypress").should("be.visible")
    cy.get("input[type='search']").clear()
    cy.get('[data-testid="tab-1"]').should("have.class", "active")
  })
})
