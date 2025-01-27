// Scenario - As a Customer I want to choose a pet and buy it

describe('Customer wants verify the order exists', () => {
  it('passes', () => {
    cy.getOrderId().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.contain.keys('id', 'petId', 'quantity', 'shipDate', 'status', 'complete')
      expect(response.body.status).to.be.eq('placed')
    })
  })
})  

