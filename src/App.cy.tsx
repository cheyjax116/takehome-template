import { RecoilRoot, selector, useRecoilValue } from "recoil";
import App from "./App";
import { countAtom } from "./atoms";

describe("<App />", () => {
  beforeEach(() => {
    cy.mount(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    cy.waitForReact(1000, "#root");
  });
  it("Verify Header  is present", () => {
    cy.get("[data-test=header]").should("exist");
  });

  it("Verify Div is present", () => {
    cy.get("div").first().should("be.exist");
  });
  it("Verify State", () => {
    // cy.get("[data-test=counter]");
    cy.getReact("App").should("exist");
    // cy.getReact("App", {
    //   props: { "[data-test]": counter },
    // }).getCurrentState();
  });

  // it("renders", () => {
  //   // see: https://on.cypress.io/mounting-react

  // });
});
