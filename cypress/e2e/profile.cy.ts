describe("Profile Page", () => {
    beforeEach(() => {
        cy.visit("/profile")
    })

    it("should load the profile page", () => {
        cy.contains("Profile").should("be.visible")
    })

    it("should fill out the form", () => {
        cy.get('input[id="email"]').clear().type("test@test.com")

        cy.get('input[id="address"]').clear().type("123 Test St")

        cy.get('input[id="country"]').clear().type("Testland")

        cy.get('input[id="email"]').should("have.value", "test@test.com")
        cy.get('input[id="address"]').should("have.value", "123 Test St")
        cy.get('input[id="country"]').should("have.value", "Testland")
    })

    it("should submit the form", () => {
        cy.get('input[id="email"]').clear().type("test@test.com")
        cy.get('input[id="address"]').clear().type("123 Test St")
        cy.get('input[id="country"]').clear().type("Testland")

        cy.get("form").then(($form) => {
            cy.log("Form action:", $form.attr("action"))
            cy.log("Form method:", $form.attr("method"))
        })

        cy.intercept("POST", "/api/profile").as("submitProfile")

        cy.get('button[type="submit"]').click()

        cy.get("body").then(($body) => {
            cy.log("Page content:", $body.html())
        })
    })
})
