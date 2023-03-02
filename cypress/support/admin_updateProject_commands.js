{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('updateProject', () => {
        cy.request({
            method: 'GET',
            url: url.getProjects,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let project = response.body.project
            let firstProjectID = project[0].id
            const randomNum = Math.floor(Math.random() * 100);
            let updateProject = "Add Project" + " " + randomNum;
            cy.log(firstProjectID)
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/project/update/" + firstProjectID,
                body: {
                    "project_name": updateProject,
                    "domain": 2,
                    "techTools": "27,61,151"
                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateProjectInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidKeyProjectName', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "projectname": "TwistHRM1",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('updateProjectInvalidKeyDomain', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domains": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidKeyTechTools', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTool": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectParenthesisOnProjectName', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "(TwistHRM1)",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
    
    Cypress.Commands.add('updateProjectParenthesisOnDomain', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": "(2)",
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  

    Cypress.Commands.add('updateProjectParenthesisOnTechTools', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": "(27),61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  

    Cypress.Commands.add('updateProjectEmptyProjectName', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  
    
    Cypress.Commands.add('updateProjectEmptyDomain', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": "",
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  
    
    Cypress.Commands.add('updateProjectEmptyTechTools', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": ""
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  

    Cypress.Commands.add('updateProjectInvalidUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.updateProjectInvalidUrl,
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectMissingRequestUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.updateProjectMissingRequestUrl,
            body: {
                "project_name": "TwistHRM1",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectDuplicateProjectName', () => {
        cy.request({
            method: 'PUT',
            url: "/twisthrm/api/v1/project/update/1",
            body: {
                "project_name": "Easy Employer",
                "domain": 2,
                "techTools": "27,61,151"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });  

    Cypress.Commands.add('updateProjectInvalidFile', () => {
        const fileName = 'testFiles/20231218.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("project_name", "Update Project Cypress");
            formData.append("domain", "1");
            formData.append("techTools", "27,61,151");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/project/update/1",
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    })

    Cypress.Commands.add('updateProjectMoreThan1MBFile', () => {
        const fileName = 'testFiles/4mb.jpg';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("project_name", "Update Project Cypress");
            formData.append("domain", "1");
            formData.append("techTools", "27,61,151");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'PUT',
                url: "/twisthrm/api/v1/project/update/1",
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    })  
}