describe("SignInPage", () => {
  it("tests interaction with page elements in mobile", () => {
    cy.visit("/signin");

    cy.viewport(1023, 800);

    cy.get(".h-dvh").should("have.class", "flex-col");

    cy.get("img")
      .should("be.visible")
      .should("have.css", "width", "250.00001525878906px");

    cy.get("h1").should("be.visible").should("include.text", "Create account");
    cy.get("p")
      .should("be.visible")
      .should(
        "include.text",
        "Please fill in the fields below to create an account."
      );
    cy.get(":nth-child(1) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Last Name");
    cy.get("#lastName")
      .should("be.visible")
      .should("have.attr", "placeholder", "Last name");
    cy.get("#lastName")
      .type("Test Last Name")
      .should("have.value", "Test Last Name");

    cy.get(":nth-child(2) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "First Name");
    cy.get("#firstName")
      .should("be.visible")
      .should("have.attr", "placeholder", "First name");
    cy.get("#firstName")
      .type("Test First Name")
      .should("have.value", "Test First Name");

    cy.get(":nth-child(3) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "E-mail");
    cy.get("#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "E-mail")
      .should("have.attr", "type", "email");
    cy.get("#email")
      .type("test@test.com")
      .should("have.value", "test@test.com");

    cy.get(":nth-child(4) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Password");
    cy.get(":nth-child(4) > .base-Input-root> svg")
      .should("be.visible")
      .should("have.attr", "width", "24")
      .should("have.attr", "height", "24");
    cy.get("#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.attr", "type", "password");
    cy.get("#password").type("1234Test@").should("have.value", "1234Test@");

    cy.get(":nth-child(5) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Confirm password");
    cy.get(":nth-child(5) > .base-Input-root> svg")
      .should("be.visible")
      .should("have.attr", "width", "24")
      .should("have.attr", "height", "24");
    cy.get("#confirm-password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.attr", "type", "password");
    cy.get("#confirm-password")
      .type("1234Test@")
      .should("have.value", "1234Test@");

    cy.get(".base-Button-root")
      .should("be.visible")
      .should("include.text", "Create account")
      .click();

    cy.get("#lastName").should("have.value", "");
    cy.get("#firstName").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get("#confirm-password").should("have.value", "");

    cy.url().should("be.equal", `${Cypress.config().baseUrl}/`);
  });

  it("tests interaction with page elements in desktop", () => {
    cy.visit("/signin");

    cy.viewport(1500, 1000);

    cy.get(".h-dvh").should("have.class", "lg:flex-row");

    cy.get(".h-dvh :nth-child(1) :nth-child(1)")
      .should("be.visible")
      .should("have.css", "width", "363.9930725097656px");

    cy.get(".h-dvh :nth-child(1) :nth-child(2)")
      .should("be.visible")
      .should("have.css", "width", "618.9757080078125px")
      .should("have.css", "height", "593.9931030273438px");

    cy.get("h1").should("be.visible").should("include.text", "Create account");
    cy.get("p")
      .should("be.visible")
      .should(
        "include.text",
        "Please fill in the fields below to create an account."
      );
    cy.get(":nth-child(1) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Last Name");
    cy.get("#lastName")
      .should("be.visible")
      .should("have.attr", "placeholder", "Last name");
    cy.get("#lastName")
      .type("Test Last Name")
      .should("have.value", "Test Last Name");

    cy.get(":nth-child(2) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "First Name");
    cy.get("#firstName")
      .should("be.visible")
      .should("have.attr", "placeholder", "First name");
    cy.get("#firstName")
      .type("Test First Name")
      .should("have.value", "Test First Name");

    cy.get(":nth-child(3) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "E-mail");
    cy.get("#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "E-mail")
      .should("have.attr", "type", "email");
    cy.get("#email")
      .type("test@test.com")
      .should("have.value", "test@test.com");

    cy.get(":nth-child(4) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Password");
    cy.get(":nth-child(4) > .base-Input-root> svg")
      .should("be.visible")
      .should("have.attr", "width", "24")
      .should("have.attr", "height", "24");
    cy.get("#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.attr", "type", "password");
    cy.get("#password").type("1234Test@").should("have.value", "1234Test@");

    cy.get(":nth-child(5) > .flex > .font-semibold")
      .should("be.visible")
      .should("include.text", "Confirm password");
    cy.get(":nth-child(5) > .base-Input-root> svg")
      .should("be.visible")
      .should("have.attr", "width", "24")
      .should("have.attr", "height", "24");
    cy.get("#confirm-password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Password")
      .should("have.attr", "type", "password");
    cy.get("#confirm-password")
      .type("1234Test@")
      .should("have.value", "1234Test@");

    cy.get(".base-Button-root")
      .should("be.visible")
      .should("include.text", "Create account")
      .click();

    cy.get("#lastName").should("have.value", "");
    cy.get("#firstName").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get("#confirm-password").should("have.value", "");

    cy.url().should("be.equal", `${Cypress.config().baseUrl}/`);
  });
});
