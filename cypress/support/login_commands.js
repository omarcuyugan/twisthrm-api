{
    const url = require("../fixtures/testData/urlApi.json")
    const loginHrPersonnel = require("../fixtures/requestBody/loginHrPersonnel.json")
    const loginEmployee = require("../fixtures/requestBody/loginEmployee.json")
    const requestNoToken = require("../fixtures/requestBody/loginNoToken.json")

    Cypress.Commands.add('loginAsEmployee', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: loginEmployee,
            failOnStatusCode: false
        });
    })

    Cypress.Commands.add('loginInvalidToken', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            },
            failOnStatusCode: false,
            timeout: 61000
        })
    });

    Cypress.Commands.add('loginNoToken', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: requestNoToken,
            failOnStatusCode: false,
            timeout: 61000
        })
    });

    Cypress.Commands.add('loginInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.invalidLoginUrl,
            body: loginHrPersonnel,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('loginAsHrPersonnel', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: loginHrPersonnel,
            failOnStatusCode: false
        })
    });
}