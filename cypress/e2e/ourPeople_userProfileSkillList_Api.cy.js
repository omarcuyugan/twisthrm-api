{
    describe('User Profile Skills List API, As an HR Personnel', () => {
        it("I should be able to fetch a specific employee and employee's skills using a valid token", { tags: ['@smoke','@coreRegression']},() => {
            cy.getSpecificEmployeeSkillHrPersonnelToken()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("skills")
                    expect(response.body.skills).to.have.property("length")
                })
        });

        it("I should not be able to fetch a specific employee and employee's skills using a invalid token", () => {
            cy.getSpecificEmployeeSkillInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it("I should not be able to fetch a specific employee and employee's skills with empty token", () => {
            cy.getSpecificEmployeeSkillEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Fetch employee record must have the following details in the response "skills"', () => {
            cy.getSpecificEmployeeSkillHrPersonnelToken()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("skills")
                    expect(response.body.skills).to.have.property("length")
                })
        });

        it('Invalid employee ID must be validated', () => {
            cy.getSpecificEmployeeSkillInvalidId()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting skill")
                })
        });

        it('Missing employee ID must be validated', () => {
            cy.getSpecificEmployeeSkillEmptyId()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid id parameter")
            })
        });

        it('Invalid URL request path structure must be validated', () => {
            cy.getSpecificEmployeeSkillInvalidUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot GET /twisthrm/api/v1/skill/employeeee/011722-356")
            })
        });

        it('Missing URL request path structure must be validated', () => {
            cy.getSpecificEmployeeSkillMissingUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot GET /twisthrm/api/011722-356")
            })
        });
    })

    describe('User Profile Skills List API, As an Employee', () => {
        it("I should be able to fetch a specific employee and employee's skills using a valid token", { tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployeeSkillEmployeeToken()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("skills")
                expect(response.body.skills).to.have.property("length")
            })
        });

        it("I should not be able to fetch a specific employee and employee's skills using a invalid token", () => {
            cy.getSpecificEmployeeSkillInvalidTokenEmployee()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid token")
            })
        });

        it("I should not be able to fetch a specific employee and employee's skills using a empty token", () => {
            cy.getSpecificEmployeeSkillEmptyTokenEmployee()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
        });

        it('Fetch employee record must have the following details in the response "skills"', () => {
            cy.getSpecificEmployeeSkillHrPersonnelToken()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("skills")
                expect(response.body.skills).to.have.property("length")
            })
        });
    })
}