{
    describe('Get all skill API as an HR Personnel', () => {
        it('Should be able to fetch all skills by passing valid token', () => {
            cy.getAllSkills()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("skills").to.have.property("length")
                })
        });

        it('Should not be able to fetch all skills by passing invalid token', () => {
            cy.invalidTokenSkill()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        });
        
        it('Should not be able to fetch all skills by passing empty token', () => {
            cy.emptyTokenSkill()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Skills should be in alphabetical order by default', () => {
            cy.skillsAtoZ()
        });

        it('"page" value in the response data must be equal to the "page" value parameter in the request', () => {
            cy.pageValue()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("page", "1")
                })
        });

        it('Fetch skill record must have the following details in the response: id, name, isDeleted', () => {
            cy.getAllSkills()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.skills[0]).to.have.property("id")
                    expect(response.body.skills[0]).to.have.property("name")
                    expect(response.body.skills[0]).to.have.property("isDeleted")
                })
        });

        it('"Null" values must not be included in the response', () => {
            cy.editSkill()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated skill")
                })
        });

        it('Validate invalid request parameters', () => {
            cy.getInvalidSkillParams()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid pageSize parameter")
                })
        });

        it('Validate empty request parameters', () => {
            cy.getEmptySkillParams()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid page parameter")
                })
        });

        it('Validate invalid url path', () => {
            cy.getInvalidPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/skills/")
                })
        });

        it('Validate empty url path', () => {
            cy.getEmptyPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
                })
        });
    })

}