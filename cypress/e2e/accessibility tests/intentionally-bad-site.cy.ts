describe("Resume Page Tests", () => {
  beforeEach(() => {
    cy.visit("/portfolios/intentionally-bad-site.html")
    cy.injectAxe()
  })

  // This test is intentionally showing violations to demonstrate accessibility testing
  it("Should show the accessibility violations in intentionally-bad-site for demonstration purposes", () => {
    cy.contains("Julie's Fake Company").should("be.visible")

    cy.window()
      .then((win) => {
        //@ts-expect-error to fix later
        return win.axe.run()
      })
      .then((results) => {
        const violations = results.violations

        cy.task("log", `🔍 Found ${violations.length} accessibility violations`)
        violations.forEach(({ id, impact, description }) => {
          cy.task("log", `🔴 [${impact}] ${id}: ${description}`)
        })

        // ✅ This is your custom assertion
        expect(violations.length).to.equal(8)
      })
  })
})
