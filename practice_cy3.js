describe('practice test three', function(){
    it('validating dynamic top of the site link',function(){
        cy.visit('https://css-tricks.com/') //launching the url
        cy.get('[class=top-of-site-link]').should('not.visible')//asserting the top of the site arrow is not visible by default
        cy.scrollTo(0,550) //scrolling down to the middle of the page
        cy.get('[class=top-of-site-link]',{ force: true }) //asserting the top of the site arrow is visible, then clicking
        .should('have.attr', 'data-visible', 'true').click()
        cy.get('[class=icon-logo-star]')//validating the logo at the top of the site is available
        cy.get('[class=screen-reader-text]')//validating the site text at the top is avaiable
    })

    it('validating filter checkbox using check/uncheck methods',function(){
        cy.get('[class=jetpack-search-filter__link]').click() //clicking the search icon
        cy.wait(1000)
        cy.get('[type=search]').scrollIntoView()//after clicking in previous step, popup window defaultly scrolls down, so we are manually scrolling to view the search field
        cy.get('[class=jetpack-instant-search__search-filter-list-input][type="checkbox"]') //geting the checkbox values class within the filter
        .not('[disabled]') //asserting that all the checkboxes were not disabled
        .check().should('be.checked')//using check method, all checkboxes should be checked

        cy.get('[class=jetpack-instant-search__search-filter-list-input][type="checkbox"]')
        .uncheck().should('not.be.checked') //using uncheck method, all checkboxes should be unchecked
    })
})