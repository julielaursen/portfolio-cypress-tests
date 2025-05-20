describe("Resume Page Tests", () => {
  beforeEach(() => {
    cy.visit("/resume")
  })

  it("Should display the header with the back button", () => {
    cy.get(".back-btn").should("be.visible").and("contain.text", "Back").click()

    // Verify the back button redirects to the index page
    cy.url().should("include", "index.html")
  })

  it("Should include a download button", () => {
    cy.get(".resume-header")
      .should("be.visible")
      .and("contain.text", "Download Resume")
    cy.intercept("GET", "**/resume.pdf").as("downloadResume")
    cy.get(".download-btn").click()
    // cy.wait("@downloadResume").its("response.statusCode").should("eq", 200)
  })

  it("Should display the profile section with correct information", () => {
    cy.get(".resume_profile .resume_title").should("contain.text", "Profile")
    cy.get(".resume_profile .resume_info").should(
      "contain.text",
      "Automation engineer with experience implementing frameworks"
    )
  })
})
