/*userCanSeeCv.feature.js*/

describe('User can see cv list', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('#cv-tab').click();
  });

  it('displays first cvbox', () => {
    cy.get('#cvbox-1').within(() => {
      cy.get('.name').should("contain", "cvbox-1");
      cy.get('.description').should("contain", "description cvbox-1");  
    });
  });

  it('displays second cvbox', () => {
    cy.get('#cvbox-2').within(() => {
      cy.get('.name').should("contain", "cvbox-2");
      cy.get('.description').should("contain", "description cvbox-2");
    });
  });

  it('displays third cvbox', () => {
    cy.get('#cvbox-3').within(() => {
      cy.get('.name').should("contain", "cvbox-3");
      cy.get('.description').should("contain", "description cvbox-3");
    });
  });













})
