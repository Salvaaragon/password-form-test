/// <reference types="cypress" />

context('Form second step tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Second step - Access to second step. Click cancel button and go back to first step', () => {
    cy.get('#check-terms').click().wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#cancel-button').click().wait(3000);
  });

  it('Second step - Access to second step. Fill inputs with errors and display/hide passwords', () => {
    cy.get('#check-terms').click().wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#password').click().wait(2000);
    cy.get('#repeat-password').click().wait(2000);
    cy.get('#password-hint').click().wait(2000);
    cy.get('#password')
      .type('123456', { delay: 100 })
      .should('have.value', '123456')
      .wait(2000);
    cy.get('#password-icon').click().wait(2000);
    cy.get('#password')
      .type('78', { delay: 100 })
      .should('have.value', '12345678')
      .wait(2000);
    cy.get('#password').type('asdf123', { delay: 100 }).wait(2000);
    cy.get('#password')
      .type('abcd fghq 12345 678oqp alfh2', {
        delay: 100,
      })
      .should('have.value', '12345678asdf123abcd fghq 12345 678oqp alfh2')
      .wait(2000);
    cy.get('#password').clear().wait(2000);
    cy.get('#password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA')
      .wait(2000);
    cy.get('#repeat-password').click().wait(2000);
    cy.get('#repeat-password-icon').click().wait(2000);
    cy.get('#repeat-password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA')
      .wait(2000);
    cy.get('#password-hint')
      .type('random password', { delay: 100 })
      .should('have.value', 'random password')
      .wait(3000);
  });

  it('Second step - Access to second step. Fill inputs and send form', () => {
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
  });
});
