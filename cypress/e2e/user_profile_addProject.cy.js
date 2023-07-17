{
    describe('Add Project on Profile API as an HR Personnel', () => {
        it('I should be able to add a project on the user profile by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.userProfileAddProjectHR()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows", 1)
                })
        });

        it('I should not be able to add a project on the user profile by passing invalid token', () => {
            cy.userProfileAddProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('I should not be able to add a project on the user profile by passing empty token', () => {
            cy.userProfileAddProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('I should be able to add two projects on the request', () => {
            cy.userProfileAddTwoProjectHR()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows", 2)
                })
        });

        it('I should be able to add a maximum of  three projects only on the request', () => {
            cy.userProfileAddThreeProjectHR()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows", 3)
                })
        });

        it('Adding more than three projects on the request must be validated', () => {
            cy.userProfileAddFourProjectHR()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "No more than 3 projects can be added at once.")
                })
        });

        it('Empty projects on the request must be validated', () => {
            cy.userProfileAddProjectEmptyProject()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project is required.")
                })
        });

        it('Adding an already added projectId should be validated', { tags: ['@coreRegression'] }, () => {
            cy.userProfileAddProjectHR()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project already exists.")
                })
        });

        it('endDate parameter must not be earlier than startDate', () => {
            cy.addProjectEarlierEndDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "endDate is an earlier date than startDate")
                })
        });

        it('"projects" key must be validated', () => {
            cy.addProjectInvalidKeyProjects()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project is required.")
                })
        });

        it('"projectId" key must be validated', () => {
            cy.addProjectInvalidKeyProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project is required.")
                })
        });

        it('"startDate" key must be validated', () => {
            cy.addProjectInvalidKeyStartDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start date is required")
                })
        });

        it('Invalid "projectId" must be validated', () => {
            cy.addProjectInvalidProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'projectId' invalid format")
                })
        });

        it('Invalid "startDate" must be validated', () => {
            cy.addProjectInvalidStartDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'startDate' invalid date format")
                })
        });

        it('Invalid "endDate" must be validated', () => {
            cy.addProjectInvalidEndDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'endDate' invalid date format")
                })
        });

        it('Empty "projectId" must be validated', () => {
            cy.userProfileAddProjectEmptyProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project is required.")
                })
        });

        it('Empty "startDate" must be validated', () => {
            cy.userProfileAddProjectEmptyStartDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start date is required")
                })
        });

        it('Invalid Employee ID must be validated', () => {
            cy.addProjectOnEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Employee doesn't exist.")
                })
        });

        it('Missing request in URL must be validated', () => {
            cy.addProjectOnEmployeeMissingUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/project/employee/093022-431")
                })
        });
    })

    describe('Add Project on Profile API as an Employee', () => {
        it('I should be able to add a project on my user profile by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.userProfileAddProjectEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('I should not be able to add a project on other employees profile by passing valid token', () => {
            cy.userProfileAddProjectOnOtherEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action.")
                })
        });
    })
}
