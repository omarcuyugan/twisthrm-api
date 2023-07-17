{
    describe('Update a Project on Profile API as an HR Personnel', () => {
        it('Update a project on the user profile by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.userProfileUpdateProjectHR()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("changedRows")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('Update a project on the user profile by passing invalid token', () => {
            cy.userProfileUpdateProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('Update a project on the user profile by passing empty token', () => {
            cy.userProfileUpdateProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Empty employeeProjectId on the request must be validated', () => {
            cy.userProfileUpdateProjectEmptyEmployeeProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'employeeProjectId' parameter required")
                })
        });

        it('Empty projectId on the request must be validated', () => {
            cy.userProfileUpdateProjectEmptyProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project is required")
                })
        });

        it('Empty startDate on the request must be validated', () => {
            cy.userProfileUpdateProjectEmptyStartDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'startDate' parameter required")
                })
        });

        it('Duplicate projectId must be validated', () => {
            cy.userProfileUpdateProjectDuplicateProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project already exists.")
                })
        });

        it('endDate parameter must not be earlier than startDate', { tags: ['@coreRegression'] }, () => {
            cy.updateProjectEarlierEndDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "endDate is an earlier date than startDate")
                })
        });

        it('Invalid "employeeProjectId" must be validated', () => {
            cy.updateProjectInvalidEmployeeProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'employeeProjectId' invalid format")
                })
        });

        it('Invalid "projectId" must be validated', () => {
            cy.updateProjectInvalidProjectId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'projectId' invalid format")
                })
        });

        it('Invalid "startDate" must be validated', () => {
            cy.updateProjectInvalidStartDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'startDate' invalid date format")
                })
        });

        it('Invalid "endDate" must be validated', () => {
            cy.updateProjectInvalidEndDate()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "'endDate' invalid date format")
                })
        });

        it('Invalid Employee ID must be validated', () => {
            cy.updateProjectInvalidEmployeeId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Employee doesn't exist.")
                })
        });

        it('Missing request in URL must be validated', () => {
            cy.userProfileUpdateProjectMissingRequestUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/project/employee/093022-432")
                })
        });
    })

    describe('Add Project on Profile API as an Employee', () => {
        it('Update a project on my user profile by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.userProfileUpdateProjectEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("changedRows")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('Updating a project on other employees profile must be validated', () => {
            cy.userProfileUpdateProjectOnOtherEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action.")
                })
        });
    })
}
