{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getAllSkills', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyTokenSkill', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('skillsAtoZ', () => {
        let listingCount = "";
        let GenSampleAZ = [];
        let GenSampleToSort = [];
        cy.getAllSkills().then(async (response) => {
            listingCount = Cypress.$(response.body.skills).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleAZ.push(response.body.skills[x].name)
            }
            GenSampleToSort = GenSampleAZ.sort();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("skills")
            expect(GenSampleAZ.toString()).to.be.equal(GenSampleToSort.toString());
        });
    });

    Cypress.Commands.add('pageValue', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('correctResponse', () => {
        cy.request({
            method: 'GET',
            url: url.getAllskills,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidSkillParams', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidParams,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmptySkillParams', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyParams,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidPath', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidURPath,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    }); 

    Cypress.Commands.add('getEmptyPath', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyURLPath,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    }); 

    Cypress.Commands.add('searchSkills', () => {
        cy.request({
            method: 'GET',
            url: url.searchSkill,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchSkillInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchSkill,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchSkillNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchSkill,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchSkillInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchSkillInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchSkillMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchSkillMissingUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchInvalidPage', () => {
        cy.request({
            method: 'GET',
            url: url.searchInvalidPage,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchInvalidPageSize', () => {
        cy.request({
            method: 'GET',
            url: url.searchInvalidPageSize,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

}