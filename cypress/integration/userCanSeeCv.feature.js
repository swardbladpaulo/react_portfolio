/*userCanSeeCv.feature.js => */

describe('User can see cv list', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('#cv-tab').click();
  });

  it('displays first cvbox', () => {
    cy.get('#cv-1').within(() => {
      cy.get('.header').should("contain", "Craft Academy");
      cy.get('.description').should("contain", "Study to became fullstack webdeveloper");  
    });
  });

  it('displays second cvbox', () => {
    cy.get('#cv-2').within(() => {
      cy.get('.header').should("contain", "Business Contractor");
      cy.get('.description').should("contain", "Providing companies to optimize and structur their business when growth");
    });
  });

  it('displays third cvbox', () => {
    cy.get('#cv-3').within(() => {
      cy.get('.header').should("contain", "Restaurang La Isla");
      cy.get('.description').should("contain", "Responsible for the nightclub operation, security, staff, purchase, food, marketing, events, VIP:s and ensure flawless guest service experience in the club.");
    });
  });













})
