{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('pagePim', () => {
        cy.request({
            method: 'GET',
            url: url.page2PIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPimUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('pageSize', () => {
        cy.request({
            method: 'GET',
            url: url.pageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPagePIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPageSizePIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPagePIM', () => {
        cy.request({
            method: 'GET',
            url: url.emptyPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPageSizePIM', () => {
        cy.request({
            method: 'GET',
            url: url.emptyPageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
}