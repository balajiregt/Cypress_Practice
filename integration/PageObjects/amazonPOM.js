class amazon{
    landingscreen(){
       cy.get('[data-nav-ref="nav_ya_signin"]').click();
       return this 
       }

       signinscreen_userphoneoremail(){
        let a= cy.get('[type=email]')
        a.should('have.value','')
        return this 
       }

       signinscreen_userpassword(){
           cy.get('[type=password]')
       }
       signinscreen_continue(){
        cy.get('[id=continue][type=submit]').click()
        return this 
       }
       
       signinscreen_signin(){
        return cy.get('[id=signInSubmit]')
       }
       productlist(){
           return cy.get('.s-result-list')
       }
       
}
export default amazon