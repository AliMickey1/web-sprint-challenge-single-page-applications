describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

        it('sanity checks work', () => {
            expect(1+2).to.equal(3)
            expect(2+2).not.to.equal(5)
        })


    it('can type in the name', () => {
        cy.get('input[name="cName"]')
        .should('have.value', '')
        .type('Ali')
        .should('have.value', 'Ali')
    })
})

describe('Checkboxes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
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

















