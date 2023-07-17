{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const editSkill = require("../fixtures/requestBody/editSkill.json")
    const emptySkillName = require("../fixtures/requestBody/emptySkillName.json")

    Cypress.Commands.add('editSkill', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let skills = response.body.skills
            let firstSkill = skills[0].id
            cy.log(firstSkill)
            var pattern = "dq9tzpeM1HuzcVXOBGZu"
            var randomString = ""
            for (var i = 0; i < 4; i++)
                randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
            editSkill.name = editSkill.name + randomString + "edit"
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/skill/update/" + firstSkill,
                body: editSkill,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
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
            body: editSkill,
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
            body: editSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptySkillParams', () => {
        cy.request({
            method: 'PUT',
            url: url.editSkillUrl,
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
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let skills = response.body.skills
            let firstSkill = skills[0].id
            cy.log(firstSkill)
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/skill/update/" + firstSkill,
                body: {
                    "name": "Burp Scan"
                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
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
        }).then(response => {
            let skills = response.body.skills
            let firstSkill = skills[0].id
            var pattern = "dq9tzpeM1HuzcVXOBGZu"
            var randomString = ""
            for (var i = 0; i < 4; i++)
                randomString += pattern.charAt(Math.floor(Math.random() * pattern.length));
            editSkill.name = editSkill.name + randomString + "editted"
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/skill/update/" + firstSkill,
                body: editSkill,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
            cy.request({
                method: 'GET',
                url: url.getAllskills,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                for (let i = 0; i < response.body.skills.length; i++) {
                    const skills = response.body.skills[i]
                    if (skills.id === (firstSkill)) {
                        expect(skills).to.have.property("id", firstSkill)
                        expect(skills).to.have.property("name", editSkill.name)
                        break;
                    }
                }
            })
        })
    });
}