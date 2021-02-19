export class Login {

  static visit(){
    cy.visit('/')
    cy.clearCookies()
    cy.clearLocalStorage()
}

  static validationMessage(){
    cy.datacy('email').find('input').focus().blur()
    cy.datacy('email').find('span').should('contain', 'Please enter a valid email')
    cy.datacy('password').find('input').focus().blur()
    cy.datacy('password').find('span').should('contain', 'Please enter a valid password')
  }

  static invalidCredential(email: string, password: string){
    cy.datacy('email').find('input').type(email)
    cy.datacy('password').find('input').type(password)
    cy.datacy('submit').click()
    cy.get('frontend-alert p').should('contain','Invalid credentials. Please try again')
    cy.wait(2000)
    cy.get('frontend-alert button').should('contain','Close').click()
  }
}
