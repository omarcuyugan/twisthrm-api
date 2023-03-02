{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('addProject', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newProject = "AddProject" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": newProject,
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidToken', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newProject = "AddProject" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": newProject,
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectEmptyToken', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newProject = "AddProject" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": newProject,
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('duplicateProjectName', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyProjectName', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "projects_name": "TwistHRM",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyDomain', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "TwistHRM",
                "domains": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyTechTools', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techToolss": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectParenthesisOnProjectName', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "(TwistHRM)",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectParenthesisOnDomain', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "Add Project 999",
                "domain": "(1)",
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectParenthesisOnTechTools', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techTools": "(1,2,3)"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectEmptyProjectName', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectEmptyDomain', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "Add Project 999",
                "domain": "",
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectEmptyTechTools', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techTools": ""
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectInvalidUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectMissingRequestUrl', () => {
        cy.request({
            method: 'POST',
            url: url.addProjectMissingRequestUrl,
            body: {
                "project_name": "TwistHRM",
                "domain": 1,
                "techTools": "27,61,421"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidFile', () => {
        const fileName = 'testFiles/20231218.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("project_name", "Add Project Cypress");
            formData.append("domain", "1");
            formData.append("techTools", "27,61,421");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.addProjectUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    })
}