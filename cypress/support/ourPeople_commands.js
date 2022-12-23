{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getAllEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidId', () => {
        cy.request({
            method: 'GET',
            url: url.invalidIdurl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getValidId', () => {
        cy.request({
            method: 'GET',
            url: url.ValidIdurl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.missingRequestPathUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingParameters', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployee,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameters', () => {
        cy.request({
            method: 'GET',
            url: url.invalidParametersUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sortTeam', () => {
        cy.request({
            method: 'GET',
            url: url.sortTeamDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('sortPosition', () => {
        cy.request({
            method: 'GET',
            url: url.sortPositionDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });
}