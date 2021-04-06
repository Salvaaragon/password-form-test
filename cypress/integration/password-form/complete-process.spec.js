/// <reference types="cypress" />

context('Complete form tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Complete flow Success - Fill success full form', () => {
    cy.get('#language-en')
      .wait(2000)
      .then((langBtn) => {
        if (langBtn.hasClass('Mui-disabled')) {
          cy.get('#language-es').click().wait(2000);
        } else {
          cy.get('#language-en').click().wait(2000);
        }
      });
    cy.get('#check-terms').click().wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA');
    cy.get('#repeat-password')
      .type('1234pruebA', { delay: 100 })
      .should('have.value', '1234pruebA');
    cy.get('#password-hint')
      .type('random password', { delay: 100 })
      .should('have.value', 'random password');
    cy.get('#form-button').click().wait(5000);
  });

  it('Complete flow Error - Fill error full form', () => {
    cy.get('#language-en')
      .wait(2000)
      .then((langBtn) => {
        if (langBtn.hasClass('Mui-disabled')) {
          cy.get('#language-es').click().wait(2000);
        } else {
          cy.get('#language-en').click().wait(2000);
        }
      });
    cy.get('#check-terms').click().wait(2000);
    cy.get('#form-button').click().wait(2000);
    cy.get('#password')
      .type('pruebaKO123', { delay: 100 })
      .should('have.value', 'pruebaKO123');
    cy.get('#repeat-password')
      .type('pruebaKO123', { delay: 100 })
      .should('have.value', 'pruebaKO123');
    cy.get('#password-hint')
      .type('random password', { delay: 100 })
      .should('have.value', 'random password');
    cy.get('#form-button').click();
  });
});
