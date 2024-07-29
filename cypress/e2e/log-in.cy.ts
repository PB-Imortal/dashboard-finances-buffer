describe("LoginPage", () => {
  it("tests elements of login page in mobile version", () => {
    cy.visit("/login");
    cy.viewport(320, 800);

    cy.get(".h-screen").should("have.class", "flex-col");
    cy.get("img").should("be.visible").should("have.css", "width", "256px");

    cy.get("h1").should("be.visible").should("include.text", "Log in");
    cy.get("p")
      .should("be.visible")
      .should(
        "include.text",
        "Welcome to My Statement, please fill in the fields below to log into your account."
      );

    cy.get(":nth-child(1) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "E-mail");

    cy.get("#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "E-mail");
    cy.get("#email")
      .type("email@test.com")
      .should("have.value", "email@test.com");

    cy.get(":nth-child(2) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Password");

    cy.get("#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Password");
    cy.get("#password").type("123456aA#").should("have.value", "123456aA#");

    cy.get(".base-Button-root")
      .should("be.visible")
      .should("include.text", "Log in")
      //.click();
    // cy.url().should("be.equal", `${Cypress.config().baseUrl}/`);

    cy.get(".border")
      .should("be.visible")
      .should("include.text", "Create account")
      //.click();

    // cy.url().should("be.equal", `${Cypress.config().baseUrl}/signin`);
  });

  it('tests the page in desktop resolution', () => {
    cy.visit('login');

    cy.viewport(1500, 1000);

    cy.get('.h-screen').should('have.class', 'lg:flex-row');
    cy.get('img').should('be.visible').should('have.css','width', '364px');
    cy.get('img').should('be.visible').should('have.class','hidden');

    cy.get('h1').should('be.visible').should('include.text', 'Log in')
    cy.get('p').should('be.visible').should('include.text', 'Welcome to My Statement, please fill in the fields below to log into your account.')

    cy.get('.gap-y-2 > :nth-child(1) > .flex').should('be.visible').should('include.text', 'E-mail');
    cy.get('#email').should('be.visible').should('have.attr', 'placeholder', 'E-mail');
    cy.get('#email').type('teste@email.com').should('have.value', 'teste@email.com');

    cy.get('.gap-y-2 > :nth-child(2) > .flex').should('be.visible').should('have.text', 'Password');
    cy.get('#password').should('be.visible').should('have.attr', 'placeholder', 'Password');
    cy.get('#password').type('123456aA#').should('have.value', '123456aA#');

    
    cy.get('.base-Button-root').should('be.visible').should('include.text', 'Log in')//.click();
    // cy.url().should("be.equal", `${Cypress.config().baseUrl}/`);

    cy.get('.border').should('be.visible').should('include.text', 'Create account')//.click();
    // cy.url().should("be.equal", `${Cypress.config().baseUrl}/signin`);

  })
});
