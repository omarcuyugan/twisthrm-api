{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const employeeId = require("../fixtures/testData/employeeId.json")

    Cypress.Commands.add('userProfileAddProjectHR', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectInvalidToken', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectEmptyToken', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddTwoProjectHR', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 4,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    },
                    {
                        "projectId": 5,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddThreeProjectHR', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 2,
                        "startDate": "01/01/2023",
                        "endDate": "01/02/2023"
                    },
                    {
                        "projectId": 3,
                        "startDate": "01/01/2023",
                        "endDate": "01/02/2023"
                    },
                    {
                        "projectId": 6,
                        "startDate": "01/01/2023",
                        "endDate": "01/02/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddFourProjectHR', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.simon,
            body: {
                "projects": [
                    {
                        "projectId": 4,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    },
                    {
                        "projectId": 5,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    },
                    {
                        "projectId": 6,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    },
                    {
                        "projectId": 7,
                        "startDate": "01/01/2023",
                        "endDate": ""
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectEmptyProject', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectEarlierEndDate', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 10,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2022"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyProjects', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "project": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyProjectId', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "project_Id": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidKeyStartDate', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "start_Date": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidProjectId', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": "TwistHRM",
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidStartDate', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 10,
                        "startDate": "(01/01/2023)",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectInvalidEndDate', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 10,
                        "startDate": "01/01/2023",
                        "endDate": "(02/01/2023)"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectEmptyProjectId', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": "",
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectEmptyStartDate', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.mccoy,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectOnEmployeeInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectInvalidUrl,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('addProjectOnEmployeeMissingUrl', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectMissingRequestUrl,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('userProfileAddProjectEmployee', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.earl,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileAddProjectOnOtherEmployee', () => {
        cy.request({
            method: 'POST',
            url: url.userProfileAddProjectUrl + employeeId.simon,
            body: {
                "projects": [
                    {
                        "projectId": 8,
                        "startDate": "01/01/2023",
                        "endDate": "02/01/2023"
                    }
                ]
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}