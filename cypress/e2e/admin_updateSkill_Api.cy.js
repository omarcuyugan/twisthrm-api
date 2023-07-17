{
    describe('Edit skill API as an HR Personnel', () => {
        it('Should be able to edit skill by passing valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.editSkill()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated skill")
                })
        });
        it('Verify the edited skill reflect on the database', () => {
            cy.getUpdatedSkill()
        });

        it('Should not be able to edit skill by passing invalid token', () => {
            cy.invalidTokenSkill()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('Should not be able to edit skill by passing empty token', () => {
            cy.emptyTokenSkill()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Validate invalid request parameters', () => {
            cy.invalidSkillParams()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid id parameter")
                })
        });

        it('Validate empty request parameters', () => {
            cy.emptySkillParams()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Skill name cannot be empty.")
                })
        });

        it('Validate invalid url path', () => {
            cy.invalidPathSkill()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/skill/updatess/157")
                })
        });

        it('Validate empty url path', () => {
            cy.emptyPathSkill()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/updatess/157")
                })
        });

        it('Verify the error message upon updating an existing skill', () => {
            cy.existingSkill()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Skill already exists.")
                })
        });
    })
}