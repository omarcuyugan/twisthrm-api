{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const addComment = require("../fixtures/requestBody/addComment.json")

    Cypress.Commands.add('commentNewsFeed', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.addComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('invalidToken', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.addComment,
                headers: {
                    'Authorization': token.invalidToken,
                },
                failOnStatusCode: false
        })
        });

        Cypress.Commands.add('missingToken', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.addComment,
                headers: {
                    'Authorization': " ",
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('getComments', () => {
            cy.request({
                method: 'GET',
                url: url.getComments,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('invalidURL', () => {
            cy.request({
                method: 'POST',
                url: url.invalidURLParameter,
                body: addComment.addComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('missingURL', () => {
            cy.request({
                method: 'POST',
                url: url.missingUrl,
                body: addComment.addComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('invalidFields', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.invalidField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('missingFields', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.missingField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('emptyFields', () => {
            cy.request({
                method: 'POST',
                url: url.addCommentUrl,
                body: addComment.emptyField,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        //update comment 
        
        Cypress.Commands.add('updateComment', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.updateComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('invalidToken', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.updateComment,
                headers: {
                    'Authorization': token.invalidToken,
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('missingToken', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.updateComment,
                headers: {
                    'Authorization': " ",
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('getComments', () => {
            cy.request({
                method: 'GET',
                url: url.getComments,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('generateId', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.updateComment,
                headers: {
                    'Authorization': token.hrPersonnel
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('invalidFieldComment', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.invalidFieldComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('missingFieldComment', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.missingFieldComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
        
        Cypress.Commands.add('emptyFieldComment', () => {
            cy.request({
                method: 'PUT',
                url: url.addCommentUrl,
                body: addComment.emptyFieldComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    }