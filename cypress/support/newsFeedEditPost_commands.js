{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const editPost = require("../fixtures/requestBody/editPost.json")

    Cypress.Commands.add('editPost', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('successPost', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('failUpdate', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editInvalidParamater,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editMissingToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editImage', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editImage,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editTypePost', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editPostType,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editContentPost', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getUpdatedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsFeedPost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.invalidParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.emptyParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('nonEditField', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editInvalidParamater,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidFileFormat', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.invalidFileFormat,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidFileSize', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.exceedFileSize,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
}