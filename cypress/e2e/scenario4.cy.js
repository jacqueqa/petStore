// Scenario - As a Client I want to manage and cancel my order

describe('Customer wants verify the order exists', () => {
  it('passes', () => {
    cy.addNewPetToStore('available').then((response) => {
      const petId = response.body.id
      cy.buyAvailablePet(petId).then((response) => {
        const orderId = response.body.id
        cy.getOrderId(orderId).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.contain.keys('id', 'petId', 'quantity', 'shipDate', 'status', 'complete')
          expect(response.body.status).to.be.eq('placed')
          expect(response.body.petId).to.be.eq(petId)
          expect(response.body.id).to.be.eq(orderId)
        })
      })
    })  
  })
})

describe('Customer cancel the existent order', () => {
  it('passes', () => {
    cy.addNewPetToStore('available').then((response) => {
      const petId = response.body.id
      cy.buyAvailablePet(petId).then((response) => {
        const orderId = response.body.id
        cy.deleteOrder(orderId).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.contain.keys('code', 'type', 'message')
          expect(response.body.type).to.be.eq('unknown')
          expect(response.body.message).to.be.eq(orderId.toString())
        })
      })
    })
  })
})
