import App from "./App";

describe("<App />", () => {
  it("Verify Header is present", () => {
    cy.get("h1").first().should("be.exist");
  });
  it("Verify Div is present", () => {
    cy.get("div").first().should("be.exist");
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
  });
});
