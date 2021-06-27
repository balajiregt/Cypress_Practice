describe('practice test three', function(){

    it('validating the focused primary fields values',function(){
        cy.visit('https://www.ag-grid.com/example.php') //launching the url
        cy.get('.ag-header-group-cell-label').should('contain','Participant')
        cy.get('.ag-header-group-cell-label').should('contain','Game of Choice')
        cy.get('.ag-header-group-cell-label').should('contain','Performance')
    })

    it('To validate the checkboxes, toggles', function () {
        cy.get('[ref=eIconWrapper]').eq(0).click()
        cy.get('[ref=cbPivotMode]').should('be.visible')
        .then(
            ($el) => cy.get('[id=ag-29-input]').should('not.have.focus')
        )

        cy.get('.ag-status-panel-total-and-filtered-row-count').children().eq(1).should('have.text','100')
        cy.get('.ag-status-panel-selected-row-count').children().eq(1).should('not.be.visible')

        cy.get('.ag-checkbox-input-wrapper').eq(0).click()
        cy.get('.ag-checkbox-input-wrapper')
        .then(
       ($el) => cy.get('.ag-checked').should('be.visible')
        )
        cy.get('.ag-status-panel-selected-row-count').children().eq(1).should('have.text','100')
    });
})