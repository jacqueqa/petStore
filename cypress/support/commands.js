
// Scenario 3
Cypress.Commands.add('getAvailablePet', () => {
    cy.request({
      method: 'GET',
      url: '/v2/pet/findByStatus',
      qs: { status: 'available' },
      headers: {
        accept: 'application/json',
      },
    })
  })
  

  Cypress.Commands.add('buyAvailablePet', () => {
    const timeString = new Date().toISOString()
    const payload = {
      petId: 250,
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
  Cypress.Commands.add('getOrderId', () => {
    cy.request({
      method: 'GET',
      url: '/v2/store/order/112312312312612',
      qs: { status: 'placed' },
      headers: {
        accept: 'application/json',
      },
    })
  })