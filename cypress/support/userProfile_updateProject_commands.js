{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const employeeId = require("../fixtures/testData/employeeId.json")


    Cypress.Commands.add('userProfileUpdateProjectHR', () => {
        var randomNumber = Math.floor((Math.random()*30)+10);
        cy.request({
            method: 'GET',
            url: "/twisthrm/api/v1/project/employee/093022-432",
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(response => {
            let employeeProject = response.body.project
            let firstProject = employeeProject[0].id
            cy.log(firstProject)
            cy.request({
                method: 'PUT',
                url: url.userProfileUpdateProject + employeeId.mccoy,
                body: {
                    "employeeProjectId": firstProject,
                    "projectId": 8,
                    "startDate": "01/" + randomNumber + "/2023",
                    "endDate": "03/01/2023"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 8,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"

            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 8,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"

            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectEmptyEmployeeProjectId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": "",
                "projectId": 2,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectEmptyProjectId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": "",
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectEmptyStartDate', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 2,
                "startDate": "",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectDuplicateProjectId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 2,
                "startDate": "01/03/2023",
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectEarlierEndDate', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "01/01/2023",
                "endDate": "02/01/2022"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidEmployeeProjectId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": "test",
                "projectId": 12,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidProjectId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": "TwistHRM",
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidStartDate', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "(01/01/2023)",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidEndDate', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "01/01/2023",
                "endDate": "(02/01/2023)"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateProjectInvalidEmployeeId', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProjectInvalidEmployeeId,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectMissingRequestUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProjectMissingRequestUrl,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectEmployee', () => {
        var randomNumber = Math.floor((Math.random()*30)+10);
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.earl,
            body: {
                "employeeProjectId": 21,
                "projectId": 1,
                "startDate": "01/" + randomNumber + "/2023",
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('userProfileUpdateProjectOnOtherEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.userProfileUpdateProject + employeeId.mccoy,
            body: {
                "employeeProjectId": 271,
                "projectId": 10,
                "startDate": "01/01/2023",
                "endDate": "02/01/2023"
            },
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}