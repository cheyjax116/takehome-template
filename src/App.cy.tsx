import { RecoilRoot } from "recoil";
import App from "./App";

describe("<App />", () => {
  it("Verify Header  is present", () => {
    cy.mount(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    cy.get("[data-test=header]").should("exist");
  });

  it("Verify Div is present", () => {
    cy.mount(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    cy.get("div").first().should("be.exist");
  });
  it("Verify State", () => {
    cy.mount(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    // cy.getReact("[data-test=counter]");
    // .its("key")
    // .should("eq", "value"); // check state
  });

  // it("renders", () => {
  //   // see: https://on.cypress.io/mounting-react

  // });
});
