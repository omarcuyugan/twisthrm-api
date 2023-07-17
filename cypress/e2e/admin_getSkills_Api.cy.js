{
    describe('Get all skill API as an HR Personnel', () => {
        it('Should be able to fetch all skills by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
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
                    expect(response.body).to.have.property("message", "Invalid token")
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
            cy.getAllSkills()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.skills[0]).to.have.property("id").to.not.be.null
                    expect(response.body.skills[0]).to.have.property("name").to.not.be.null
                    expect(response.body.skills[0]).to.have.property("isDeleted").to.not.be.null
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

        it('I should be able to search a skill by passing valid token', { tags: ['@smoke','@coreRegression']},() => {
            cy.searchSkills()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("skills")
                })
        });

        it('I should not be able to search a skill by passing invalid token', () => {
            cy.searchSkillInvalid()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid token")
            })
        });

        it('I should not be able to search a skill by passing empty token', () => {
            cy.searchSkillNoToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        });

        it('Search skill record must have the following details in the response -id -name -isDeleted', () => {
            cy.searchSkills()
            .then(response => {
                let count = Cypress.$(response.body.skills).length
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("skills").to.have.length(count)
                expect(response.body).to.have.property("page")
                expect(response.body).to.have.property("totalRecords")
                expect(response.body).to.have.property("pageSize")
            })
        });

        it('Search result must be related to the search keyword', { tags: ['@smoke','@coreRegression']}, () => {
            cy.searchSkills()
                .then(async (response) => {
                    let count = Cypress.$(response.body.skills).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const skills = response.body.skills[x].name
                        expect(response.status).to.eq(200)
                        expect(response).to.have.property("body")
                        expect(skills).to.contains("Vue",)
                    }
                })
        });

        it('Search result list must be equal to the "totalRecords" parameter', () => {
            cy.searchSkills()
            .then(response => {
                let count = Cypress.$(response.body.skills).length
                cy.log(count)
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body.skills).to.have.length(count)
                expect(response.body).to.have.property("totalRecords", count)
                expect(count).to.equal(response.body.skills.length)
            })
        });

        it('Invalid URL request parameters "page" must be validated', () => {
            cy.searchInvalidPage()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid page parameter")
                })
        });

        it('Invalid URL request parameters "pageSize" must be validated', () => {
            cy.searchInvalidPageSize()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid pageSize parameter")
                })
        });

        it('Invalid URL request path url must be validated', () => {
            cy.searchSkillInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/skills")
                })
        });

        it('Missing URL request path must be validated ', () => {
            cy.searchSkillMissingUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
                })
        });
    })

}