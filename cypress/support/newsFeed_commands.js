{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('newsFeedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContents', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPath', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyParameter', () => {
        cy.request({
            method: 'GET',
            url: url.emptyParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('imageURL', () => {
        cy.request({
            method: 'GET',
            url: url.imageURL,
        })
    });

    Cypress.Commands.add('invalidParameterNewsFeedSection', () => {
        cy.request({
            method: 'GET',
            url: url.invalidURLParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

// employee
    Cypress.Commands.add('newsFeedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContents', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPath', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedInvalidUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyParameter', () => {
        cy.request({
            method: 'GET',
            url: url.emptyParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('imageURL', () => {
        cy.request({
            method: 'GET',
            url: url.imageURL,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameter', () => {
        cy.request({
            method: 'GET',
            url: url.invalidParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}