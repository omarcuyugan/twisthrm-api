{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('deleteSkill', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteSkillUrl,
            headers: {
                'Authorization': token.hrPersonnel,
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

    Cypress.Commands.add('deleteInvalidToken', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteSkillUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteEmptyToken', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteSkillUrl,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteInvalidParams', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteInvalidParams,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('nonExistId', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteNonExistId,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteInvalidURL', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteInvalidURL,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteEmptyURL', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteEmptyURL,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('activeSkill', () => {
        cy.request({
            method: 'DELETE',
            url: url.deleteSkillUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
}