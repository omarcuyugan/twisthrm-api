{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const addSkill = require("../fixtures/requestBody/addSkill.json")

    Cypress.Commands.add('addSkillValidToken', () => {
        var pattern = "dq9tzpeM1HuzcVXOBGZu"
        var randomString = ""
        for (var i = 0; i < 4; i++)
            randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
        addSkill.name = [randomString + " Test Skill"]
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: addSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillInvalidToken', () => {
        var pattern = "dq9tzpeM1HuzcVXOBGZu"
        var randomString = ""
        for (var i = 0; i < 4; i++)
            randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
        addSkill.name = [randomString + " Test Skill"]
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: addSkill,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillEmptyToken', () => {
        var pattern = "dq9tzpeM1HuzcVXOBGZu"
        var randomString = ""
        for (var i = 0; i < 4; i++)
            randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
        addSkill.name = [randomString + " Test Skill"]
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: addSkill,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addMultipleSkills', () => {
        var pattern = "dq9tzpeM1HuzcVXOBGZu"
        var randomString = ""
        for (var i = 0; i < 4; i++)
            randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
        addSkill.name = [randomString + " Test Skill1", randomString + " Test Skill2", randomString + " Test Skill3",
        randomString + " Test Skill4", randomString + " Test Skill5"]
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: addSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillInvalidKey', () => {
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: {
                "namee": ["Test Skill"]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillWithParenthesis', () => {
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: {
                "name": ["(Test Skill)"]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillEmptyParameter', () => {
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: {
                "name": [""]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.addSkillInvalidUrl,
            body: {
                "name": ["Test Skill"]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addSkillMissingRequestUrl', () => {
        cy.request({
            method: 'POST',
            url: url.addSkillMissingRequestUrl,
            body: {
                "name": ["Test Skill"]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addExistingSkill', () => {
        cy.request({
            method: 'POST',
            url: url.addSkill,
            body: {
                "name": ["Add Skill Postman"]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

}