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

// Create functions for random numbers on Manager Actions test
describe('Customer wants to buy a pet on the store', () => {
  it('passes', () => {
    cy.buyAvailablePet().then((response) => {
      const petId = response.body.petId
      const orderdId = response.body.id
      expect(response.status).to.eq(200)
      expect(response.body).to.have.include.keys('id', 'petId', 'quantity', 'shipDate', 'status', 'complete')
      expect(response.body.petId).to.be.eq(250) // Hardcoded value to be changed on Manager Actions tests
      console.log(`The customer bought the pet with ID: ${petId} and the order ID is: ${orderdId}`)
    })
  })
})  