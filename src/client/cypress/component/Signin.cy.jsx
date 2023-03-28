import SignIn from "../../src/components/SignIn"

describe('Sign In Page', () => {
  
    it('displays the login form', () => {
      cy.mount(<SignIn/>)
      cy.get('.Wrapper').should('be.visible')
    })
  
    it('allows the user to submit the login form', () => {
        cy.mount(<SignIn/>)
      cy.get('.LoginInput[name="email"]').type('testuser')
      cy.get('.LoginInput[name="password"]').type('testpassword') 
      cy.get('.LoginButton').click()
      cy.url().should('include', '/userTimeline')
    })
})
