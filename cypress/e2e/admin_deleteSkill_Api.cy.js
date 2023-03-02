{
    describe('Delete skill API as an HR Personnel', () => {
        it('Should be able to delete skill by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.deleteSkill()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully deleted skill. ")
                })
        });
        it('Verify the deleted skill reflect on the database', () => {
            cy.getDeletedSkill()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                })
        });

        it('Should not be able to delete skill by passing invalid token', () => {
            cy.deleteInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('Should not be able to delete skill by passing empty token', () => {
            cy.deleteEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Validate invalid request parameters', () => {
            cy.deleteInvalidParams()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid ID parameter")
                })
        });

        it('Validate non existing ID parameters', () => {
            cy.nonExistId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Skill doesn't exist.")
                })
        });

        it('Validate invalid url path', () => {
            cy.deleteInvalidURL()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/skill/deletess/189")
                })
        });

        it('Validate empty url path', () => {
            cy.deleteEmptyURL()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/skill/189")
                })
        });

        it('Verify the error message upon delete an active skill', () => {
            cy.activeSkill()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Failed to delete the skill. Skill is actively being used.")
                })
        });
    })

}