//Negative Scenario

describe('Manager wants to remove an inexistent pet', () => {
    it('passes', () => {
        cy.addNewPetToStore('available').then((response) => {
            const petId = response.body.id
            cy.removePetData(petId)
            cy.removeInexistentPet(petId).then((response) => {
                expect(response.status).to.eq(404)
            })
        })
    })
}) 