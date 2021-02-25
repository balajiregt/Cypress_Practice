import { assert } from 'console'
import amazon from '../integration/PageObjects/amazonPOM'
const ama=new amazon() 

describe('Amazon.in validations before login', function() {
  
    // 
  
    it('navigate and signin in', function() {
      cy.visit('https://www.amazon.in/')
      ama.landingscreen().click
      ama.signinscreen_userphoneoremail()
      ama.signinscreen_continue().click

    })

    it('emaili or phone number validations for signing in', function() {
        // 
        let phonenumber=xxxxxxxxxx
        
        cy.get('[type=email]').clear
        cy.get('[type=submit]').click()
        cy.contains('Enter your email or mobile phone number')
        cy.get('[type=email]').type(phonenumber)
        cy.get('[type=submit]').click
  
      })
    })

    describe ('Amazon.in validations after login',function(){
      beforeEach (function() {
      
        let phonenumber=xxxxxxxxxxxx
        let username='balajik'
        cy.visit('https://www.amazon.in/')
        cy.get('[data-nav-ref="nav_ya_signin"]',{timeout:10000}).click()
        cy.get('[type=email]').type(phonenumber)
        cy.get('[id=continue][type=submit]').click()
        cy.get('[id=signInSubmit]').click()
        cy.contains('Enter your password')
        cy.get('[type=password]').type('15071989')
        cy.get('[id=signInSubmit]').click()
      })
      it('to confirm the expected username and the cart value', function(){
        cy.get('[class=nav-line-1-container]').should('contain','balajik')
        let cartitemscount= cy.get('.nav-cart-count').should('contain','3').click()
        let itemscountInsubTotal=cy.get('.sc-number-of-items').should('contain','3')
        if(cartitemscount=itemscountInsubTotal){
          cy.log('The cart count matches')
        }
      }) 
    })

      
    describe ('Product searching and product details',function(){

      it('to verify the search products are listed in the search results', function(){

        /*let phonenumber=xxxxxxxxxxx
        let username='balajik'
        cy.visit('https://www.amazon.in/')
        cy.get('[data-nav-ref="nav_ya_signin"]',{timeout:10000}).click()
        cy.get('[type=email]').type(phonenumber)
        cy.get('[id=continue][type=submit]').click()
        cy.get('[id=signInSubmit]').click()
        cy.contains('Enter your password')
        cy.get('[type=password]').type('15071989')
        cy.get('[id=signInSubmit]').click() */
        
        let searchproductnamefield='sony tv 55 inch'
        let searchcontain1='sony'
        let searchcontain2=55
        cy.get('[id=twotabsearchtextbox]').type(searchproductnamefield)
        cy.get('[id=nav-search-submit-text]').click()

        cy.get('.s-result-list')
       .should('contain', searchcontain1)
        
       cy.get('.s-result-list')
       .should('contain', searchcontain2)

       cy.get('[class=sg-col-inner]').should('contain',' results for')
       
       cy.get('[class=sg-col-inner]').should(($div) => {          //after clicking Feature, the active highlighted dropdown value
          const text3 = $div.text()
          expect(text3).to.have.string(searchproductnamefield)
          })
        
        })

      it('to verify the filter criterias in the left pane',function(){
        cy.get('#low-price').should('have.attr', 'placeholder', 'Min')
        cy.get('#high-price').should('have.attr', 'placeholder', 'Max')
        cy.contains('₹10,000 - ₹20,000').click()
        cy.get('[id=priceRefinements]').should('contain',"Any Price")
        cy.get('[id=low-price]').should('have.value','10,000')
        cy.get('[id=high-price]').should('have.value','20,000')
        
        
      })

    it('to verify the sort by filter actions and validations', function(){
      

      //validating the li elements for "Discounts" ul
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should ('have.length',4)
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should('contain','Off or more')
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should('contain','10%')
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should('contain','25%')
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should('contain','35%')
      cy.get('[aria-labelledby="p_n_pct-off-with-tax-title"] > li').should('contain','50%')
    })
    })
    describe ('Sorting default display and after selecting sorting validations',function(){
      it('default value is Featured before clicking it; validating the ".active" class of filter value "Feature" after clicking that', function(){
      cy.get('.a-dropdown-label').should('contain','Sort by')
      cy.get('.a-dropdown-prompt').should(($div) => {  //
        const text = $div.text()
        expect(text).to.have.string('Featured')
    
        })

        //validating the ".active" class of filter value "Feature" after clicking that
      cy.get('.a-dropdown-prompt').click()
      cy.get('.a-active').should('contain','Featured')
      })
    })
