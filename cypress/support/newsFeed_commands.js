{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('newsFeedPostHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidTokenHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingTokenHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyTokenHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContentsHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPathHr', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyGroupIdHr', () => {
        cy.request({
            method: 'GET',
            url: url.emptyGroupIdParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('imageURLHr', () => {
        cy.request({
            method: 'GET',
            url: url.imageURL,
        })
    });

    Cypress.Commands.add('invalidParameterNewsFeedSectionHr', () => {
        cy.request({
            method: 'GET',
            url: url.invalidGroupIdParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

// employee
    Cypress.Commands.add('newsFeedPostEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidTokenEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingTokenEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyTokenEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContentsEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPathEmp', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedInvalidUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyGroupIdEmp', () => {
        cy.request({
            method: 'GET',
            url: url.emptyGroupIdParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('imageURLEmp', () => {
        cy.request({
            method: 'GET',
            url: url.imageURL,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidGroupIdEmp', () => {
        cy.request({
            method: 'GET',
            url: url.invalidGroupIdParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}