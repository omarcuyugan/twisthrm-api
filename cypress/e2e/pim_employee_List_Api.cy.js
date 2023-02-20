{
    const url = require("../fixtures/testData/urlApi.json")
    const token = require("../fixtures/token/token.json")

    describe('Employee Information List API', () => {
        it('I should be able to see a List of Employees by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.getEmployeePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("employees").to.have.property("length")
                })
        })

        it('I should not be able to see a List of Employees by passing invalid token', { tags: '@coreRegression' }, () => {
            cy.getEmployeeInvalidTokenPIM()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to see a List of Employees when there is no authorization token', () => {
            cy.getEmployeeNoTokenPIM()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('List of Employee Names should be sorted A-Z by default', { tags: '@coreRegression' }, () => {
            cy.sortLastNameAZ()
        })

        it('Each employee record must have the following details in the response', () => {
            cy.getEmployeePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("employees")
                    expect(response.body.employees[0]).to.have.property("EmployeeNumber")
                    expect(response.body.employees[0]).to.have.property("FirstName")
                    expect(response.body.employees[0]).to.have.property("LastName")
                    expect(response.body.employees[0]).to.have.property("Birthday")
                    expect(response.body.employees[0]).to.have.property("TREmail")
                    expect(response.body.employees[0]).to.have.property("CurrentPosition")
                    expect(response.body.employees[0]).to.have.property("Department")
                    expect(response.body.employees[0]).to.have.property("Contact")
                    expect(response.body.employees[0]).to.have.property("Status")
                    expect(response.body.employees[0]).to.have.property("ActiveStatus")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.getEmployeeInvalidUrlPIM()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('I should be able to filter list of employees by page by passing "page" parameter', () => {
            cy.getEmployeePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("page", "1")
                })
        })

        it('I should be able to get a number of employees on the Employee list  by passing "pageSize" parameter', () => {
            cy.getEmployeePIM()
                .then(response => {
                    let count = Cypress.$(response.body.employees).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property('pageSize')
                    expect(response.body.pageSize).to.include(count)
                })
        })

        it('"page" value in the response data must be equal to the "page" value parameter in the request', () => {
            cy.getEmployeePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("page", "1")
                })
        })

        it('"pageSize" value in the response data must be equal to the "pageSize" value parameter in the request', () => {
            cy.getEmployeePIM()
                .then(response => {
                    let count = Cypress.$(response.body.employees).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property('pageSize')
                    expect(response.body.pageSize).to.include(count)
                })
        })

        it('A message "There was an error when getting all employees" is returned when the specific page has no available record.', () => {
            cy.getEmployeeInvalidPagePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "No data found.")
                })
        })

        it('"Null" values must not be included in the response', () => {
            cy.getEmployeePIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("employees")
                    expect(response.body.employees[0]).to.have.property("EmployeeNumber").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("FirstName").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("LastName").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("Birthday").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("TREmail").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("CurrentPosition").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("Department").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("Contact").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("Status").to.not.be.null
                    expect(response.body.employees[0]).to.have.property("ActiveStatus").to.not.be.null
                })
        })

        it('I should be able to sort the "Name" to ascending order', () => {
            cy.sortLastNameAZ()
        })

        it('I should be able to sort the "Name" to descending order', () => {
            cy.sortLastNameZA()
        })

        it('I should be able to sort the "Role" to ascending order', () => {
            cy.sortRoleAZ()
        })

        it('I should be able to sort the "Role" to descending order', () => {
            cy.sortRoleZA()
        })

        it('I should be able to sort the "Email" to ascending order', () => {
            cy.sortEmailAZ()
        })

        it('I should be able to sort the "Email" to descending order', () => {
            cy.sortEmailZA()
        })

        it('I should be able to include the deactivated Employees on the list by passing "isDel" parameter', () => {
            cy.getDeactivatedPIM()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.employees[0]).to.have.property("ActiveStatus", "Deactivated")
                })
        })

        it('Invalid Employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Error getting employee with employee number: 093022. Employee doesn't exist.")
                })
        })

        it('Invalid required field "isDel" parameter must be validated', () => {
            cy.getInvalidIsdel()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Invalid required field "sort" parameter must be validated', () => {
            cy.getInvalidSort()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Invalid required field "page" parameters must be validated', () => {
            cy.getInvalidPage()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("error", "The request can't be fulfilled. Please make sure you have entered a number.")
                })
        })

        it('Empty required "isDel" parameter must be validated', () => {
            cy.getEmptyIsdel()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Empty required "sort" parameter must be validated', () => {
            cy.getEmptySort()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Empty required "page" parameter must be validated', () => {
            cy.getEmptyPage()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })
    })
}