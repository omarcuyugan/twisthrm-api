{
    describe('User Profile Projects List for Present Projects, As an HR Personnel API', () => {
        it('I should be able to fetch employees project records', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("project").to.have.property("length")
                    expect(response.body.project[0]).to.have.property("employee_id", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using a invalid token', () => {
            cy.getEmployeeProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects with empty token', () => {
            cy.getEmployeeProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Fetch employee record must have the following details in the response: project, totalRecords', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("project").to.have.property("length")
                    expect(response.body).to.have.property("totalRecords")
                })
        })

        it('Present projects is indicated by passing the is_current parameter to "1"', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    let count = Cypress.$(response.body.project).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const project = response.body.project[x]
                        if (project.is_current === (1)) {
                            expect(response.status).to.eq(200)
                            expect(response).to.have.property("body")
                            expect(project).to.have.property("id")
                            expect(project).to.have.property("project_name")
                            expect(project).to.have.property("is_current", 1)
                        }
                    }
                })
        })

        it('Fetch project record must have the following details in the response:id, employee_id, project_name, tech_tools, domain_name, image_url, start_date, end_date, is_current', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.project[0]).to.have.property("id")
                    expect(response.body.project[0]).to.have.property("employee_id")
                    expect(response.body.project[0]).to.have.property("project_id")
                    expect(response.body.project[0]).to.have.property("project_name")
                    expect(response.body.project[0]).to.have.property("tech_tools")
                    expect(response.body.project[0]).to.have.property("domain_name")
                    expect(response.body.project[0]).to.have.property("image_url")
                    expect(response.body.project[0]).to.have.property("start_date")
                    expect(response.body.project[0]).to.have.property("end_date")
                    expect(response.body.project[0]).to.have.property("is_deleted")
                    expect(response.body.project[0]).to.have.property("is_current")
                })
        })

        it('Invalid employee ID must be validated', () => {
            cy.getEmployeeProjectInvalidId()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Employee doesn't exist.")
                })
        })

        it('Missing employee ID must be validated', () => {
            cy.getEmployeeProfileMissingId()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employee")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.getEmployeeProjectInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employees/093022-431")
                })
        })

        it('Missing URL request path structure must be validated', () => {
            cy.getEmployeeProjectMissingUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employee/")
                })
        })
    })

    describe('User Profile Projects List for Present Projects, As an Employee API', () => {
        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjectsAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.project[0]).to.have.property("employee_id", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using invalid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects using an empty token', () => {
            cy.getEmployeeProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Present projects is indicated by passing the is_current parameter to "1"', () => {
            cy.getEmployeeProjectsAsEmployee()
                .then(response => {
                    let count = Cypress.$(response.body.project).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const project = response.body.project[x]
                        if (project.is_current === (1)) {
                            expect(response.status).to.eq(200)
                            expect(response).to.have.property("body")
                            expect(project).to.have.property("id")
                            expect(project).to.have.property("project_name")
                            expect(project).to.have.property("is_current", 1)
                        }
                    }
                })
        })
    })

    describe('User Profile Projects List for Past Projects, As an HR Personnel API', () => {
        it('I should be able to fetch employees project records', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("project").to.have.property("length")
                    expect(response.body.project[0]).to.have.property("employee_id", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using a invalid token', () => {
            cy.getEmployeeProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects with empty token', () => {
            cy.getEmployeeProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Fetch employee record must have the following details in the response: project, totalRecords', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("project").to.have.property("length")
                    expect(response.body).to.have.property("totalRecords")
                })
        })

        it('Past projects is indicated by passing the is_current parameter to "0"', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    let count = Cypress.$(response.body.project).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const project = response.body.project[x]
                        if (project.is_current === (0)) {
                            expect(response.status).to.eq(200)
                            expect(response).to.have.property("body")
                            expect(project).to.have.property("id")
                            expect(project).to.have.property("project_name")
                            expect(project).to.have.property("is_current", 0)
                        }
                    }
                })
        })

        it('Fetch project record must have the following details in the response:id, employee_id, project_name, tech_tools, domain_name, image_url, start_date, end_date, is_current', () => {
            cy.getEmployeeProjects()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.project[0]).to.have.property("id")
                    expect(response.body.project[0]).to.have.property("employee_id")
                    expect(response.body.project[0]).to.have.property("project_id")
                    expect(response.body.project[0]).to.have.property("project_name")
                    expect(response.body.project[0]).to.have.property("tech_tools")
                    expect(response.body.project[0]).to.have.property("domain_name")
                    expect(response.body.project[0]).to.have.property("image_url")
                    expect(response.body.project[0]).to.have.property("start_date")
                    expect(response.body.project[0]).to.have.property("end_date")
                    expect(response.body.project[0]).to.have.property("is_deleted")
                    expect(response.body.project[0]).to.have.property("is_current")
                })
        })

        it('Invalid employee ID must be validated', () => {
            cy.getEmployeeProjectInvalidId()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Employee doesn't exist.")
                })
        })

        it('Missing employee ID must be validated', () => {
            cy.getEmployeeProfileMissingId()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employee")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.getEmployeeProjectInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employees/093022-431")
                })
        })

        it('Missing URL request path structure must be validated', () => {
            cy.getEmployeeProjectMissingUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/project/employee/")
                })
        })
    })

    describe('User Profile Projects List for Past Projects, As an Employee API', () => {
        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjectsAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.project[0]).to.have.property("employee_id", "093022-431")
                })
        })

        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.getEmployeeProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects using an empty token', () => {
            cy.getEmployeeProjectEmptyToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        })

        it('Past projects is indicated by passing the is_current parameter to "0"', () => {
            cy.getEmployeeProjectsAsEmployee()
                .then(response => {
                    let count = Cypress.$(response.body.project).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const project = response.body.project[x]
                        if (project.is_current === (0)) {
                            expect(response.status).to.eq(200)
                            expect(response).to.have.property("body")
                            expect(project).to.have.property("id")
                            expect(project).to.have.property("project_name")
                            expect(project).to.have.property("is_current", 0)
                        }
                    }
                })
        })
    })
}