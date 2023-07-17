{
    describe('Delete Project API as an HR Personnel', () => {
        it('I should be able to delete a project upon passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.deleteProject()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully deleted Project")
            })
        });
        it('I should not be able to delete a project upon passing invalid token', () => {
            cy.deleteProjectInvalidToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid token")
            })
        });

        it('I should not be able to delete a project upon passing empty token', () => {
            cy.deleteProjectEmptyToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        });

        it('Validate invalid request parameters', () => {
            cy.deleteProjectInvalidID()
            .then(response => {
                expect(response.status).to.eq(500)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid id parameter")
            })
        });

        it('Validate empty request parameters', () => {
            cy.deleteProjectEmptyID()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/delete")
            })
        });

        it('Validate invalid url path', () => {
            cy.deleteProjectInvalidURL()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/deletesss/160")
            })
        });

        it('Validate missing url path', () => {
            cy.deleteProjectMissingRequestURL()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/project/160")
            })
        });

        it('Verify the success message upon successful deletion of project', () => {
            cy.deleteProject()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully deleted Project")
            })
        });

        it('Verify the error message upon deleting an active project', () => {
            cy.deleteActiveProject()
            .then(response => {
                expect(response.status).to.eq(500)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Failed to delete the project. Project is actively being used.")
            })
        });
    })
}