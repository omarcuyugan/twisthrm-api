{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const loginHrPersonnel = require("../fixtures/requestBody/loginHrPersonnel.json")
    const loginEmployee = require("../fixtures/requestBody/loginEmployee.json")
    const requestNoToken = require("../fixtures/requestBody/loginNoToken.json")

    Cypress.Commands.add('searchHrPersonnel', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sqlInjection', () => {
        cy.request({
            method: 'GET',
            url: url.sqlInjectionUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}