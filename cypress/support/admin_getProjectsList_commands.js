{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getAllProjects', () => {
        cy.request({
            method: 'GET',
            url: url.getProjects,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getAllProjectsInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getProjects,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getAllProjectsEmptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.getProjects,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('projectsAtoZ', () => {
        let listingCount = "";
        let GenSampleAZ = [];
        let GenSampleToSort = [];
        cy.getAllProjects().then(async (response) => {
            listingCount = Cypress.$(response.body.project).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleAZ.push(response.body.project[x].name)
            }
            GenSampleToSort = GenSampleAZ.sort();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("project")
            expect(GenSampleAZ.toString()).to.be.equal(GenSampleToSort.toString());
        });
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

    Cypress.Commands.add('getProjectInvalidPath', () => {
        cy.request({
            method: 'GET',
            url: url.getProjectInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    }); 

    Cypress.Commands.add('getProjectMissingPath', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeProjectMissingRequestUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    }); 

    Cypress.Commands.add('searchProject', () => {
        cy.request({
            method: 'GET',
            url: url.searchProject,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchDomain', () => {
        cy.request({
            method: 'GET',
            url: url.searchDomain,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchTechAndTools', () => {
        cy.request({
            method: 'GET',
            url: url.searchTechAndTools,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchProject,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchProject,
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchProjectInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchProjectMissingRequestUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectInvalidPage', () => {
        cy.request({
            method: 'GET',
            url: url.searchProjectInvalidPage,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectInvalidPageSize', () => {
        cy.request({
            method: 'GET',
            url: url.searchProjectInvalidPageSize,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchProjectNoDataFound', () => {
        cy.request({
            method: 'GET',
            url: url.noProjectFound,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

}