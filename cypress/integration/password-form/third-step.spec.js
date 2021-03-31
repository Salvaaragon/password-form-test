/// <reference types="cypress" />

context('Form third step tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Thrid step - Access to third step. Click end button to reset form process', () => {
    cy.get('#check-terms').click().wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA')
      .wait(2000);
    cy.get('#repeat-password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA')
      .wait(2000);
    cy.get('#password-hint')
      .type('random password', { delay: 100 })
      .should('have.value', 'random password')
      .wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#reset-form').click();
  });
});
