{
    describe('Search As an HR Personnel API', () => {
        it('I should be able to search an Employee by passing valid token', () => {
            cy.searchHrPersonnel()
                .then(async (response) => {
                    let count = Cypress.$(response.body.employees).length
                    for (let x = 0; x < count; x++) {
                        const employees = response.body.employees[x].CurrentPosition
                        expect(response.status).to.eq(200)
                        expect(response).to.have.property("body")
                        expect(employees).to.contains("Scrum")
                    }
                })
        })

        it('I should not be able to search an Employee by passing invalid token', () => {
            cy.searchEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })

        it('I should not be able to search an Employee when there is no authorization token', () => {
            cy.searchEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Search employee record must have the following details in the response', () => {
            cy.searchHrPersonnel()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.employees[0]).to.have.property("EmployeeNumber")
                    expect(response.body.employees[0]).to.have.property("FirstName")
                    expect(response.body.employees[0]).to.have.property("LastName")
                    expect(response.body.employees[0]).to.have.property("TREmail")
                    expect(response.body.employees[0]).to.have.property("CurrentPosition")
                })
        })

        it('Search result must be related to the search keyword', () => {
            cy.searchHrPersonnel()
                .then(async (response) => {
                    let count = Cypress.$(response.body.employees).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const employees = response.body.employees[x].CurrentPosition
                        expect(response.status).to.eq(200)
                        expect(response).to.have.property("body")
                        expect(employees).to.contains("Scrum",)
                    }
                })
        })

        it('Search result list must be equal to the "totalRecords" parameter', () => {
            cy.searchHrPersonnel()
                .then(response => {
                    let count = Cypress.$(response.body.employees).length
                    cy.log(count)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.employees).to.have.length(3)
                    expect(response.body).to.have.property("totalRecords", 3)
                    expect(count).to.equal(response.body.employees.length)
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.searchInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })
    })

    describe('Search As an Employee API', () => {
        it('I should be able to search an Employee by passing valid token', () => {
            cy.searchEmployee()
                .then(async (response) => {
                    let count = Cypress.$(response.body.employees).length
                    cy.log(count)
                    for (let x = 0; x < count; x++) {
                        const employees = response.body.employees[x].CurrentPosition
                        expect(response.status).to.eq(200)
                        expect(response).to.have.property("body")
                        expect(employees).to.contains("Scrum")
                    }
                })
        });

        it('I should not be able to search an Employee by passing invalid token', () => {
            cy.searchEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        });

        it('I should not be able to search an Employee when there is no authorization token', () => {
            cy.searchEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('I should not be able to pass a SQL Injection on the endpoint of the API', () => {
            cy.sqlInjection()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        });
    })
}
