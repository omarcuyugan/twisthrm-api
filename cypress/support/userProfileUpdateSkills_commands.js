{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('updateEmployeeSkillHr', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateEmployeeSkillHrInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117
                ]

            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateEmployeeSkillHrEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117
                ]
            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('parenthesisOnParameter', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    "(122)"
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('putSpecificEmployeeSkillInvalidId', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkillInvalidId,
            body: {
                "skills": [
                    122,
                    117
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('putSpecificEmployeeSkillMissingUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkillMissingUrl,
            body: {
                "skills": [
                    122,
                    117,
                    61
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateEmployeeSkillHr2', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117,
                    61
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateOtherEmployeeSkillAsEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateOtherEmployeeSkillAsEmployee2', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployeeSkill,
            body: {
                "skills": [
                    122,
                    117,
                    61
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateMySkillAsEmployee2', () => {
        cy.request({
            method: 'PUT',
            url: url.employeeUpdateSkill,
            body: {
                "skills": [
                    122,
                    117,
                    61
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateMySkillAsEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.employeeUpdateSkill,
            body: {
                "skills": [
                    122,
                    117
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}