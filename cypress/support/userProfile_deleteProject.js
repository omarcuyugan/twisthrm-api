{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('userProfileDeleteProjectHR', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + firstProject,
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectInvalidToken', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + firstProject,
                    headers: {
                        'Authorization': token.invalidToken,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectEmptyToken', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + firstProject,
                    headers: {
                        'Authorization': "",
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectInvalidID', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + "AAAAA",
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectMissingID', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + "",
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectInvalidUrl', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProjectInvalidUrl,
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectMissingUrl', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProjectMissingUrl,
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectAsEmployee', () => {
        cy.getEmployeeProjects()
            .then(response => {
                let employeeProject = response.body.project
                let firstProject = employeeProject[0].id
                cy.log(firstProject)
                cy.request({
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + firstProject,
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('userProfileDeleteProjectOnOtherEmployee', () => {
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
                    method: 'DELETE',
                    url: url.userProfileDeleteProject + firstProject,
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });
}