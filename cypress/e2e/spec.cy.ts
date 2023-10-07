describe('template spec', () => {


  beforeEach( () => {
    cy.visit('http://localhost:3000/')
    cy.waitForReact(1000, "#root");
    
  })
  it("Verify State", () => {
    // cy.get("[data-test=counter]");
    cy.getReact("App");
    // cy.getReact("App", {
    //   props: { "[data-test]": counter },
    // }).getCurrentState();
  });
})