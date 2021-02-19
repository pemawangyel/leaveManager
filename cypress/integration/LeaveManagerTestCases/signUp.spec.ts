describe('Sign up Test suite', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.datacy('signUp').click()
  })
  it('1 | singUp validation', () => {
    //todo
  })
  it('2 | Test with invalid email', () => {
    //todo
  })
  it('3 | Test password with six character', () => {
    //todo
  })
  it('4 | Test password with less than six character', () => {
    //todo
  })
  it('5 | Test unmatched confirm password', () => {
    //todo
  })
  it('6 | Test for successful sign up', () => {
    //todo
  })
  it('7 | Test for successful sign up with status At Work', () => {
    //todo
  })
  it('8 | Test for successful sign up with status On Leave', () => {
    //todo
  })
  it('9 | Test for successful sign up with status Inactive', () => {
   //todo
  })
  it('10 | Test sign up for already existing email address', () => {
    //todo
  })
})
