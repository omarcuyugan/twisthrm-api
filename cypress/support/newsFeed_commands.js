{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('newsFeedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContents', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPath', () => {
        cy.request({
            method: 'GET',
            url: url.invalidUrlPost,
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
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameter', () => {
        cy.request({
            method: 'GET',
            url: url.invalidParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmptyIsdel', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyIsdel,
            headers: {
                'Authorization': token.hrPersonnel
            },
            failOnStatusCode: false
        })
    });

// employee
    Cypress.Commands.add('newsFeedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postContents', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPath', () => {
        cy.request({
            method: 'GET',
            url: url.invalidUrlPost,
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
            url: "https://nbt-trsgdevmnt1-twisthrm-dev-assets.s3.ap-southeast-1.amazonaws.com/posts/twistresources/birthday/38ed7aefa4aa5bc63434355d7155e890d46a42e1.jpg",
            headers: {
                'Authorization': token.employeeDev,
            },
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

    Cypress.Commands.add('getEmptyIsdel', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyIsdel,
            headers: {
                'Authorization': token.employeeDev
            },
            failOnStatusCode: false
        })
    });
}