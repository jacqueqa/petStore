// Scenario - As a Customer I want to choose a pet and buy it

describe('Customer wants to choose an available Pet on the Store', () => {
  it('passes', () => {
    cy.getAvailablePets().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.greaterThan(0)
      expect(response.body[0]).to.contain.keys('id', 'name', 'status')
    })
  })
})  

describe('Customer wants to buy a pet on the store', () => {
  it('passes', () => {
    cy.addNewPetToStore('available').then((response) => {
      const petId = response.body.id
      cy.buyAvailablePet(petId).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.include.keys('id', 'petId', 'quantity', 'shipDate', 'status', 'complete')
        expect(response.body.petId).to.be.eq(petId) 
      })
    })
  }) 
})