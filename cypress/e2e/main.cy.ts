describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("https://julielaursen.github.io/")
  })

  it("Verify page title is correct", () => {
    cy.contains("h1", "Julie Coleman")
  })
})
