/*userCanSeeListOfProjects.feature.js => projects.json*/

describe('User can see list of project', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('#projects-tab').click();
  });

  it('displays the first project', () => {
    cy.get('#project-1').within(() => {
      cy.get('.image').should("exist");
      cy.get('.header').should("contain", "My First Website");
      cy.get('.description').should("contain", "This was my first website");
    });
  });

  it('displays the second project', () => {
    cy.get('#project-2').within(() => {
      cy.get('.image').should("exist");
      cy.get('.header').should("contain", "Fizzbuzz");
      cy.get('.description').should("contain", "Lets play some fizzbuzz.");
    });
  });

  it('displays the third project', () => {
    cy.get('#project-3').within(() => {
      cy.get('.image').should("exist");
      cy.get('.header').should("contain", "BMI Calculator");
      cy.get('.description').should("contain", "My third project was to build a BMI Calculator.");
    });
  });
  
  
});
