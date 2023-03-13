{
    describe('Delete Project API as an HR Personnel', () => {
        it('I should be able to delete a project on the user profile',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.userProfileDeleteProjectHR()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully deleted Employee Project")
            })
        });
        
        it('I should not be able to delete a project on the user profile by passing invalid token', () => {
            cy.userProfileDeleteProjectInvalidToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid token")
            })
        });

        it('I should not be able to delete a project on the user profile by passing empty token', () => {
            cy.userProfileDeleteProjectEmptyToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        });

        it('Invalid employeeProjectId must be validated', () => {
            cy.userProfileDeleteProjectInvalidID()
            .then(response => {
                expect(response.status).to.eq(500)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid id parameter")
            })
        });

        it('Empty employeeProjectId must be validated', () => {
            cy.userProfileDeleteProjectMissingID()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/employee/delete/")
            })
        });

        it('Invalid request URL must be validated', () => {
            cy.userProfileDeleteProjectInvalidUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/employees/delete/34")
            })
        });

        it('Missing request URL must be validated', () => {
            cy.userProfileDeleteProjectMissingUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/employee/34")
            })
        });
    })
    describe('Delete Project API as an Employee', () => {

        it('I should be able to delete a project on my user profile', () => {
            cy.userProfileDeleteProjectAsEmployee()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully deleted Employee Project")
            })
        });

        it('I should not be able to delete a project on other employee user profile', () => {
            cy.userProfileDeleteProjectOnOtherEmployee()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "You don't have the right permission for this action")
            })
        });
    })
}