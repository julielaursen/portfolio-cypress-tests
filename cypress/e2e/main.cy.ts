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

  it("Verify introduction", () => {
    cy.contains("h2", "Introduction")
    cy.get("div.introduction").find("p").should("have.length", 3)
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
    cy.get("footer")
      .find("a")
      .eq(0)
      .should("have.attr", "href", "https://github.com/julielaursen")
    cy.get("footer")
      .find("a")
      .eq(1)
      .should(
        "have.attr",
        "href",
        "https://www.notion.so/Hi-I-m-Julie-Coleman-16c962ebb36080d18eb0f5adebd21268"
      )
    cy.get("footer")
      .find("a")
      .eq(2)
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/julie-coleman-79b7a83/"
      )
    cy.get(".sitemap")
      .find("a")
      .eq(0)
      .should("have.attr", "href", "portfolios/marketing-portfolio.html")
    cy.get(".sitemap")
      .find("a")
      .eq(1)
      .should("have.attr", "href", "portfolios/uiux-portfolio.html")
    cy.get(".sitemap")
      .find("a")
      .eq(2)
      .should("have.attr", "href", "portfolios/developer-portfolio.html")
    cy.get(".sitemap")
      .find("a")
      .eq(3)
      .should("have.attr", "href", "services.html")
  })
})
