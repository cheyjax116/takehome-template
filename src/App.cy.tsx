import App from "./App";

describe("<App />", () => {
  it("Verify Header  is present", () => {
    cy.mount(<App />);
    cy.get("[data-test=header]").should("exist");
  });

  it("Verify Div is present", () => {
    cy.mount(<App />);
    cy.get("div").first().should("be.exist");
  });

  // it("renders", () => {
  //   // see: https://on.cypress.io/mounting-react

  // });
});
