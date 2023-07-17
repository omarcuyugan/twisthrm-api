{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getSpecificEmployeeSkillHrPersonnelToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillEmptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillInvalidId', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkillInvalidId,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillEmptyId', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkillEmptyId,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkillInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkillMissingUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillEmployeeToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillInvalidTokenEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeSkillEmptyTokenEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeSkill,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });
}