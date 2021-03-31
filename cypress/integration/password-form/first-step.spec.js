/// <reference types="cypress" />

context('Form first step tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('First Step - Check terms field and uncheck to display errors', () => {
    cy.get('#check-terms').click().wait(2000);
    cy.get('#check-terms').click().wait(5000);
  });

  it('First Step - Check terms field and send form', () => {
    cy.get('#check-terms').click().wait(3000);
    cy.get('#form-button').click();
  });
});
