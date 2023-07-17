{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('deleteProject', () => {
        cy.request({
            method: 'GET',
            url: url.getProjects,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let project = response.body.project
            let firstProject = project[20].id
            cy.log(firstProject)
            cy.request({
                method: 'DELETE',
                url: "/twisthrm/api/v1/project/delete/" + firstProject,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('deleteProjectInvalidToken', () => {
        cy.request({
            method: 'DELETE',
            url: "/twisthrm/api/v1/project/delete/1",
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteProjectEmptyToken', () => {
        cy.request({
            method: 'DELETE',
            url: "/twisthrm/api/v1/project/delete/1",
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getDeletedSkill', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteProjectInvalidID', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteProjectInvalidID,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteProjectEmptyID', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteProjectEmptyId,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteProjectInvalidURL', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteProjectInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteProjectMissingRequestURL', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteProjectMissingRequestUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteActiveProject', () => {
        cy.request({
            method: 'DELETE',
            url: "/twisthrm/api/v1/project/delete/1",
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
}