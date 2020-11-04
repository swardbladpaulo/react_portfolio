describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('if select About Me on the top menu in the header.jsx and no longer see the hello.jsx', () => {
    /*cy.get('#about-tab').click();*/

    cy.get('#about-header').should("contain", "About Me");

    /*cy.get('#projects-header').should("not.exist");*/
    /*cy.get('#hello').should("not.exist");*/
  });

  it('if select My Projects on the top menu in the header.jsx', () => {
    /*cy.get('#projects-tab').click();*/

    cy.get('#project-header').should("contain", "My Projects");

    /*cy.get('#about-header').should("not.exist");*/
    /*cy.get('#hello').should("not.exist");*/
  });

})

