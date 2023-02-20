{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const deletePost = require("../fixtures/requestBody/deletePost.json")

    Cypress.Commands.add('deletePost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data
                let firstPost = post[0].id
                let firstElementId = post[0].elementIds
                cy.request({
                    method: 'PUT',
                    url: url.deletePost,
                    body: {
                        "postId": firstPost,
                        "elementIds": firstElementId,
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('deleteInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.deletePost,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidURLDeletePost', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteInvalidUrl,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingURLDeletePost', () => {
        cy.request({
            method: 'PUT',
            url: url.missingUrl,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameterDeletePost', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.invalidParamater,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyParameterDeletePost', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.emptyParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingParameterDeletePost', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.missingParameter,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    //employee

    Cypress.Commands.add('deleteURL', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data.filter(post => post.userId === "093022-431")
                let firstPost = post[0].id
                let firstElementId = post[0].elementIds
                cy.request({
                    method: 'PUT',
                    url: url.deletePost,
                    body: {
                        "postId": firstPost,
                        "elementIds": firstElementId,
                    },
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('deleteInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.deletePost,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidURL', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteInvalidUrl,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingURL', () => {
        cy.request({
            method: 'PUT',
            url: url.missingUrl,
            body: deletePost.deletePost,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameter', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.invalidParamater,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyParameterDeletePostEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.emptyParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingParameters', () => {
        cy.request({
            method: 'PUT',
            url: url.deletePost,
            body: deletePost.missingParameter,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteOtherEmployeePost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data.filter(post => post.userId === "093022-432")
                let firstPost = post[0].id
                let firstElementId = post[0].elementIds
                cy.request({
                    method: 'PUT',
                    url: url.deletePost,
                    body: {
                        "postId": firstPost,
                        "elementIds": firstElementId,
                    },
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });
}