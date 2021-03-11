describe('My First Test', function() {
    it('Visits page', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type')
      cy.contains('focus').click()
      
    })
    it('assertions', function(){
              cy.visit('https://example.cypress.io')
              cy.contains('type').click()
              cy.url().should('include','/commands/actions')
              cy.get('.action-email')
                .should('have.value', '')
            })
    it('navigating to tabs', function(){
        cy.visit('https://docs.cypress.io/')
      cy.contains('Examples')
      cy.contains('Examples').click()  
          })
    it('typing text', function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-email').type('fake@gmail.com').should('have.value','fake@gmail.com')
        cy.get('[id=password1]').type('Testing123')
        cy.debug();
              })
    })
          
