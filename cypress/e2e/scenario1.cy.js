// Scenario - As a Manager I want to add a new pet to the store

describe('Manager wants to add a new available Pet on the Store', () => {
    it('passes', () => {
      cy.addNewPetToStore('available').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.contain.keys('category', 'id', 'name', 'photoUrls', 'status', 'tags')
        expect(response.body.status).to.be.eq('available')
      })
    })
  })  
  
  describe('Manager wants to add a new Pet on the Store with pending Status', () => {
    it('passes', () => {
      cy.addNewPetToStore('pending').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.contain.keys('category', 'id', 'name', 'photoUrls', 'status', 'tags')
        expect(response.body.status).to.be.eq('pending')
      })
    })
  })  
  
  describe('Manager wants to update Pet Data on the Store', () => {
    it('passes', () => {
        cy.addNewPetToStore('pending').then((response) => {
            const petId = response.body.id
            cy.updatePetData(petId, 'available').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.contain.keys('category', 'id', 'name', 'photoUrls', 'status', 'tags')
                expect(response.body.status).to.be.eq('available')
                expect(response.body.id).to.be.eq(petId)
            })
        })
    })

    describe('Manager wants to remove Pet Data from the Store', () => {
      it('passes', () => {
          cy.addNewPetToStore('pending').then((response) => {
              const petId = response.body.id
              cy.removePetData(petId).then((response) => {
                  expect(response.status).to.eq(200)
                  expect(response.body).to.contain.keys('code', 'type', 'message')
                  expect(response.body.message).to.be.eq(petId.toString())
              })
          })
      })
  }) 
})  