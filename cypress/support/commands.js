
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
  
