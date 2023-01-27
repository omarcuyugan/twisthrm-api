{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const deleteComment = require("../fixtures/requestBody/deleteComment.json")

    Cypress.Commands.add('deleteComment', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.deleteComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('invalidToken', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.deleteComment,
                headers: {
                    'Authorization': token.invalidToken,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('missingToken', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.deleteComment,
                headers: {
                    'Authorization': " ",
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('invalidUrlPath', () => {
            cy.request({
                method: 'PUT',
                url: url.invalidDelComment,
                body: deleteComment.deleteComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('missingUrlPath', () => {
            cy.request({
                method: 'PUT',
                url: url.missingUrl,
                body: deleteComment.deleteComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('invalidField', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.invalidField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('missingField', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.missingField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('emptyField', () => {
            cy.request({
                method: 'PUT',
                url: url.deleteComment,
                body: deleteComment.missingField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
        })
        });

    }