{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getEmployeeProjects', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectEmptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectInvalidId', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjectsInvalidID,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProfileMissingId', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjectsMissingID,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjectInvalidURL,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjectMissingRequestUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectsAsEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectsInvalidTokenAsEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeProjectsEmptyTokenAsEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjects,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });
}