describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

        it('sanity checks work', () => {
            expect(1+2).to.equal(3)
            expect(2+2).not.to.equal(5)
        })

        

})

describe('Checkboxes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('can type in the name', () => {
        cy.get('input[name="name-input"]')
        .should('have.value', '')
        .type('Ali')
        .should('have.value', 'Ali')
    })

    it("select a topping", () => {
        cy.get('.toppings input[type="checkbox"]')
        .as('checkboxes')
        .check()


    cy.get('@checkboxes')
    .each(checkbox => {
      expect(checkbox[0].checked).to.equal(true)
    })
})
})

















