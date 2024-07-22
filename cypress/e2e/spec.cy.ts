describe("template spec", () => {
    it("passes", () => {
        cy.visit("http://localhost:5173")
        cy.get("button").click().should("contain.text", "count is 1")
    })
})
