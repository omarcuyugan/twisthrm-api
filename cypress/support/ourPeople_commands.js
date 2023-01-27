{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getAllEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidId', () => {
        cy.request({
            method: 'GET',
            url: url.invalidIdurl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getValidId', () => {
        cy.request({
            method: 'GET',
            url: url.ValidIdurl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.missingRequestPathUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingParametersOurPeople', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployee,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameters', () => {
        cy.request({
            method: 'GET',
            url: url.invalidParametersUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sortTeam', () => {
        cy.request({
            method: 'GET',
            url: url.sortTeamDesc,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('sortPosition', () => {
        cy.request({
            method: 'GET',
            url: url.sortPositionDesc,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });
}