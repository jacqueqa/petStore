// Scenario - As a Customer I want to choose a pet and buy it

describe('Customer wants to choose an available Pet on the Store', () => {
  it('passes', () => {
    cy.getAvailablePet().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.greaterThan(0)
      expect(response.body[0]).to.contain.keys('id', 'name', 'status')
    })
  })
})  