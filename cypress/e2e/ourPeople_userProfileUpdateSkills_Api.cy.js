{
    describe('Our People User Profile Update Skills, As an HR Personnel API', () => {
        it('Should be able to add skills on the employees profile by passing valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.updateEmployeeSkillHr()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully added/updated employee skills")
                    expect(response.body).to.have.property("results").to.have.length(2)
                })
        })

        it('Should not be able to add skills on the employees profile by passing Invalid token', () => {
            cy.updateEmployeeSkillHrInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('Should not be able to add skills on the employees profile by passing empty token', () => {
            cy.updateEmployeeSkillHrEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Invalid parameter "parenthesis" must be validated', () => {
            cy.parenthesisOnParameter()
            .then(response => {
                cy.log(response.body)
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "There was an error when adding/updating skills")
            })

        })

        it('Invalid URL path must be validated', () => {
            cy.putSpecificEmployeeSkillInvalidId()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Employee doesn't exist.")
            })
        })

        it('Missing URL path must be validated', () => {
            cy.putSpecificEmployeeSkillMissingUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot PUT /twisthrm/api/011722-356")
            })
            
        })

        it('The response must have the following -message -results', () => {
            cy.updateEmployeeSkillHr()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully added/updated employee skills")
                expect(response.body).to.have.property("results").to.have.length(2)
            })
        })

        it('Should be able to update skills on the employees profile', { tags: ['@smoke','@coreRegression']},() => {
            cy.updateEmployeeSkillHr2()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully added/updated employee skills")
                expect(response.body).to.have.property("results").to.have.length(3)
            })
        })
    })

    describe('Our People User Profile Update Skills, As an Employee API', () => {
        it('Should be able to add skills on my profile by passing valid token', { tags: ['@smoke','@coreRegression']},() => {
            cy.updateMySkillAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully added/updated employee skills")
                    expect(response.body).to.have.property("results").to.have.length(2)
                })
        })

        it('Should not be able to add skills on my profile by passing Invalid token', () => {
            cy.updateEmployeeSkillHrInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('Should not be able to add skills on my profile by passing empty token', () => {
            cy.updateEmployeeSkillHrEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Should not be able to add skills on other employees profile by passing valid token', () => {
            cy.updateOtherEmployeeSkillAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action.")
                })
        })

        it('Should be able to update skills on my profile', { tags: ['@smoke','@coreRegression']},() => {
            cy.updateMySkillAsEmployee2()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully added/updated employee skills")
                expect(response.body).to.have.property("results").to.have.length(3)
            })
        })

        it('Should not be able to update skills on other employees profile', () => {
            cy.updateOtherEmployeeSkillAsEmployee2()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action.")
                })
        })
    })
}