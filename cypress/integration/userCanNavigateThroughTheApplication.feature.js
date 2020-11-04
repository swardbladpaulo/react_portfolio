describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('if select About Me on the top meny in the header.jsx and no longer see the hello.jsx', () => {
    cy.get('#about-tab').click();

    cy.get('#about-header').should("contain", "About Me");

    cy.get('#projects-header').should("not.exist");
    cy.get('#hello').should("not.exist");
  });

})

