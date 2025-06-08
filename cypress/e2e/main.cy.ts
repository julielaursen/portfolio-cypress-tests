describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light")
      },
    })
  })

  it("Verify page title is correct", () => {
    cy.contains("h1", "Julie Coleman")
  })

  it("Verify home icon is correct", () => {
    cy.get(".logo")
      .should("be.visible")
      .and("have.attr", "src", "images/logo1.png")
  })

  it("Verify favicon", () => {
    cy.get("link[rel='icon']")
      .should("have.attr", "href")
      .and("include", "favicon.ico")
  })

  it("Verify introduction", () => {
    cy.contains("h2", "Introduction")
    cy.get("div.introduction").find("p").should("have.length", 3)
  })

  it("Verify menu button calls overlay", () => {
    cy.checkMenuOverlay()
  })

  it("Verify grid and its items", () => {
    cy.get("div.grid-container").find(".grid-item").should("have.length", 6)
  })

  it("Verify search box functionality", () => {
    cy.dataCy("skills-tab-dev").should("have.class", "active")
    cy.get('input[type="search"]').type("Cypress")
    cy.dataCy("skills-tab-qa").should("have.class", "active")
    cy.contains("Cypress").should("be.visible")
    cy.get("input[type='search']").clear()
    cy.dataCy("skills-tab-dev").should("have.class", "active")
  })

  it("Verify Credly certification profile link", () => {
    cy.get("section.credly a")
      .should("have.attr", "href", "https://www.credly.com/users/julie-laursen")
      .and("have.attr", "target", "_blank") // Ensure it opens in a new tab
      .and("have.attr", "aria-label", "View my Credly badges")
  })

  it("Verify user can toggle dark/light theme", () => {
    //start theme with light mode
    cy.get("body").should("not.have.class", "dark-mode")
    cy.get(".site-header").should("not.have.class", "dark-mode")

    cy.get("#dark-mode-toggle").click()

    cy.get("body").should("have.class", "dark-mode")
    cy.get(".site-header").should("have.class", "dark-mode")

    cy.get("body").should("have.css", "background-color", "rgb(18, 18, 18)")
  })

  it("verify footer links", () => {
    cy.checkFooter()
  })

  it("Should scroll to the top when 'Back to Top' button is clicked", () => {
    cy.scrollTo("bottom")
    cy.get("#back-to-top").should("be.visible").click()
    cy.window().its("scrollY").should("equal", 0)
  })
})
