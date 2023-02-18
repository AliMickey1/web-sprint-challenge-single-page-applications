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
        cy.get('input[name="custName"]')
        .should('have.value', '')
        .type('Ali')
        .should('have.value', 'Ali')
    })

    it("select a topping", () => {
        cy.get('.toppings input[type="checkbox"]')
        .as('checkboxes')
        .check()
    })
 
describe('Submit the form', () => {
    it('can successfully submit', () => {
      cy.get(`button[id="order-button"]`).click()
    })
})
    
})



















