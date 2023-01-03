{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('searchHrPersonnel', () => {
        cy.request({
            method: 'GET',
            url: url.searchPIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchPIM,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchPIM,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchInvalidUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.searchPIM,
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}