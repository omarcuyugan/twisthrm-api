{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const addComment = require("../fixtures/requestBody/addComment.json")

    Cypress.Commands.add('commentNewsFeed', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body
                let firstPost = post[0].id
                let firstElementId = post[0].elementIds
                cy.request({
                    method: 'POST',
                    url: url.addCommentUrl,
                    body: {
                       
                        "comment": "add comment from cypress"
                    },
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
        });
        
        Cypress.Commands.add('commentNewsFeedHr', () => {
            cy.request({
                method: 'GET',
                url: url.newsfeedUrl,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
                .then(response => {
                    let post = response.body
                    let firstPost = post[0].id
                    let firstElementId = post[0].elementIds
                    cy.request({
                        method: 'POST',
                        url: url.addCommentUrl,
                        body: {
                           "comment":"add comment from cypress"
                        },
                        headers: {
                            'Authorization': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    })
                })
            });

        Cypress.Commands.add('invalidTokenAddComment', () => {
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

        Cypress.Commands.add('missingTokenAddCOmment', () => {
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

        Cypress.Commands.add('invalidURLComment', () => {
            cy.request({
                method: 'POST',
                url: url.invalidUrlAddComment,
                body: addComment.addComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('missingURLAddComment', () => {
            cy.request({
                method: 'POST',
                url: url.missingUrlAddComment,
                body: addComment.addComment,
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
                method: 'GET',
                url: url.newsfeedUrl,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
                .then(response => {

               
                    cy.request({
                        method: 'PUT',
                        url: url.updateCommentUrl,
                        body: {
                            "comment": "edit comment from cypress"
                        },
                        headers: {
                            'Authorization': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    })
                })
        });

        Cypress.Commands.add('updateCommentEmployee', () => {
            cy.request({
                method: 'GET',
                url: url.newsfeedUrl,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
                .then(response => {
                   
                    cy.request({
                        method: 'PUT',
                        url: url.updateCommentUrlEmp,
                        body: {
                            "comment": "edit comment from cypress"
                        },
                        headers: {
                            'Authorization': token.employeeDev,
                        },
                        failOnStatusCode: false
                    })
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
                url: url.updateCommentUrl,
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
                url: url.updateCommentUrl,
                body: addComment.emptyFieldComment,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    }