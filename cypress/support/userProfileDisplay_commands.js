{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getSpecificEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployee,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeEmpty', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeEmpty,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalidUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeAsEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployee,
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

}