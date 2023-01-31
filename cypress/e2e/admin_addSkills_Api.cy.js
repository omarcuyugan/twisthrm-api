{
    describe('Add skill API as an HR Personnel', () => {
        it('I should be able to add skills upon passing valid token', () => {
            cy.addSkillValidToken()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('I should not be able to add skills upon passing invalid token', () => {
            cy.addSkillInvalidToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Invalid token")
            })
        });
        
        it('I should not be able to add skills upon passing empty token', () => {
            cy.addSkillEmptyToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        });

        it('I should be able to add multiple skills ', () => {
            cy.addMultipleSkills()
            .then(response=> {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully saved!")
                expect(response.body).to.have.property("affectedRows", 5)
            })
        });

        it('Invalid key in the request should be validated', () => {
            cy.addSkillInvalidKey()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "'Name' parameter required")
            })
        });

        it('Validate parenthesis in request parameters', () => {
            cy.addSkillWithParenthesis()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "There was an error when adding skills")
            })
        });

        it('Validate empty request parameters', () => {
            cy.addSkillEmptyParameter()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "'Name' parameter required")
            })
        });

        it('Validate invalid url path', () => {
            cy.addSkillInvalidUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot POST /twisthrm/api/v1/skills/create")
            })
        });

        it('Validate missing url path', () => {
            cy.addSkillMissingRequestUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot POST /twisthrm/api/v1/create")
            })
        });

        it('Verify the success message upon successful creation of skill', () => {
            cy.addSkillValidToken()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully saved!")
                expect(response.body).to.have.property("affectedRows", 1)
            })
        });

        it('Verify the error message upon adding an existing skill', () => {
            cy.addExistingSkill()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Duplicate entry 'Add Skill Postman' for key 'name'")
            })
        });
    })

}