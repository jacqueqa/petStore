const { faker } = require("@faker-js/faker")

//Scenario 1
Cypress.Commands.add('addNewPetToStore', (status) => {
  const randomId = faker.number.int(1000)
  const payload = {
    "id": randomId,
    "category": {
      "id": randomId,
      "name": faker.animal.type()
    },
    "name": faker.animal.petName(),
    "status": status
  }
  cy.request({
    method: 'POST',
    url: '/v2/pet',
    body: payload,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
})

Cypress.Commands.add('updatePetData', (petId, status) => {
  const newPetName = faker.animal.petName()
  const payload = {
    "id": petId,
    "category": {
      "id": petId,
    },
    "name": newPetName,
    "status": status
  }
  cy.request({
    method: 'PUT',
    url: '/v2/pet',
    body: payload,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
})

Cypress.Commands.add('removePetData', (petId) => {
  cy.request({
    method: 'DELETE',
    url: '/v2/pet/' + petId,
    headers: {
      accept: 'application/json',
    },
  })
})

// Scenario 2
Cypress.Commands.add('removeInexistentPet', (petId) => {
  cy.request({
    failOnStatusCode: false,
    method: 'DELETE',
    url: '/v2/pet/' + petId,
    headers: {
      accept: 'application/json',
    }
  })
})


// Scenario 3
Cypress.Commands.add('getAvailablePets', () => {
    cy.request({
      method: 'GET',
      url: '/v2/pet/findByStatus',
      qs: { status: 'available' },
      headers: {
        accept: 'application/json',
      },
    })
  })
  

Cypress.Commands.add('buyAvailablePet', (petId) => {
  const timeString = (new Date()).toISOString()
  const payload = {
    id: faker.number.int(1000),
    petId: petId,
    quantity: 1,
    shipDate: timeString,
    status: 'placed',
    complete: true,
  }
  cy.request({
    method: 'POST',
    url: '/v2/store/order',
    body: payload,
    headers: {
      accept: 'application/json',
    },
  })
})

// Scenario 4
Cypress.Commands.add('getOrderId', (orderId) => {
  cy.request({
    method: 'GET',
    url: '/v2/store/order/' + orderId,
    qs: { status: 'placed' },
    headers: {
      accept: 'application/json',
    },
  })
})

Cypress.Commands.add('deleteOrder', (orderId) => {
  cy.request({
    method: 'DELETE',
    url: '/v2/store/order/' + orderId,
    headers: {
      accept: 'application/json',
    },
  })
})