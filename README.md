# PetStore - API TESTS
This repository contains practice API tests using Cypress, designed to test a pet store's API.
The following API was used for practice: [PetStore](https://petstore.swagger.io/)

## Test Scenarios 

**Thinking on an E2E approach, the following scenarios were created with test cases and automated, there are a lot more possible scenarios to cover this API, but these were selected as an example to represent business interactions.**

| Scenarios | Issues | Test Cases | 
| ------ | ------ | ------ |
| 1-  As a Manager I want to update the Pet Inventory with addition/update/removal of pets | [Scenario - 1](https://github.com/jacqueqa/petStore/issues/12) | 4 |
| 2- As a Manager I cannot update a removed pet from the inventory (negative/error scenario) | [Scenario - 2 ](https://github.com/jacqueqa/petStore/issues/13) | 1 |
| 3- As a Customer I want to choose a pet and buy it |[Scenario - 3](https://github.com/jacqueqa/petStore/issues/11) | 2| 
| 4- As a Customer I want to manage and cancel my order| [Scenario - 4](https://github.com/jacqueqa/petStore/issues/14) | 2 |


Github Project and the following issues were created to help streamline manual testing, as well as serve as a guide for test automation.
Some of the preconditions described there, were only necessary for manual tests. Automated tests are capable fulfilling those preconditions in a self contained way.


## Getting Started

**Prerequisites**

- Node.js
- Cypress
- GitBash (for windows users)

## Installation 

**To run this project locally, you will need to clone the repository:**

```
git clone https://github.com/jacqueqa/petStore.git
```

**After clonning, open the project on VSCode then run the command:**

```
npm install
```

**To run the tests:**

```
npx cypress run
```

## Reports 
You can check the daily pipeline results here:

[![PetStore Report](https://github.com/jacqueqa/petStore/actions/workflows/cypress.yaml/badge.svg)](https://github.com/jacqueqa/petStore/actions/workflows/cypress.yaml)