describe("Resume Page Tests", () => {
  beforeEach(() => {
    cy.visit("/portfolios/contact.html")
    cy.injectAxe()
  })

  // This test is intentionally showing violations to demonstrate accessibility testing
  it("Should show the site for accessibility testing", () => {
    cy.contains("CONTACT US").should("be.visible")

    cy.window()
      .then((win) => {
        return win.axe.run()
      })
      .then((results) => {
        const violations = results.violations

        cy.task("log", `🔍 Found ${violations.length} accessibility violations`)
        violations.forEach(({ id, impact, description }) => {
          cy.task("log", `🔴 [${impact}] ${id}: ${description}`)
        })

        // ✅ This is your custom assertion
        expect(violations.length).to.equal(7)
      })
  })
})
