{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const editSkill = require("../fixtures/requestBody/editSkill.json")
    const emptySkillName = require("../fixtures/requestBody/emptySkillName.json")

    Cypress.Commands.add('editSkill', () => {
        var pattern = "dq9tzpeM1HuzcVXOBGZu"
        var randomString = ""
        for (var i = 0; i < 4; i++)
            randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
        editSkill.name = editSkill.name + randomString + "edit"
        cy.request({
            method: 'PUT',
            url: url.editSkillUrl,
            body: editSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getUpdatedSkill', () => {
        cy.request({
            method: 'GET',
            url: url.editSkillUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidTokenSkill', () => {
        cy.request({
            method: 'PUT',
            url: url.editSkillUrl,
            body: editSkill.editSkill,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyTokenSkill', () => {
        cy.request({
            method: 'PUT',
            url: url.editSkillUrl,
            body: editSkill.editSkill,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidSkillParams', () => {
        cy.request({
            method: 'PUT',
            url: url.invalidSkillUrl,
            body: editSkill.editSkills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptySkillParams', () => {
        cy.request({
            method: 'PUT',
            url: url.emptyEditURL,
            body: emptySkillName,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPathSkill', () => {
        cy.request({
            method: 'PUT',
            url: url.invalidEditPath,
            body: editSkill.editSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPathSkill', () => {
        cy.request({
            method: 'PUT',
            url: url.emptyEditPath,
            body: editSkill.editSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('existingSkill', () => {
        cy.request({
            method: 'PUT',
            url: url.editSkillUrl,
            body: editSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getUpdatedSkill', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
}