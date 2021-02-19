import { Login } from '../../support/PageObjectModel/login';

describe('Login Test Suite', () => {
  beforeEach(() => {
    Login.visit();
  });

  it('1 | Login Validation', () => {
    Login.validationMessage();
  });

  it.only('2 | Test login with wrong email and wrong password', () => {
    Login.invalidCredential('wrong@gmail.com', 'plmkoijn');
  });

  it('3 | Test login with correct email and wrong password', () => {
    Login.invalidCredential('IamGod@gmail.com', 'wrongpassword');
  });

  it('4 | Test login with wrong email and correct password', () => {
    Login.invalidCredential('wrong@gmail.com', 'iamGod');
  });

  it('5 | Test login with invalid email format', () => {
    cy.datacy('email').find('input').type('invalidemailformat.com').focus().blur();
    cy.datacy('email').find('span').should('contain', 'Please enter a valid email');
  });

  it('6 | Test successful login', () => {
    //cy.intercept('post','/auth/login').as('login');
    cy.Login();
    cy.get('frontend-account-detail h2').should('contain', 'User Details')
  });
});
