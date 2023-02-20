{
    describe('User Profile Projects List for Present Projects, As an HR Personnel API', () => {
        it('I should be able to fetch employees project records',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using a invalid token', () => {
            cy.getSpecificEmployeeInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects with empty token', () => {
            cy.getSpecificEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Fetch employee record must have the following details in the response: project, totalRecords', () => {
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber")
                    expect(response.body[0]).to.have.property("FirstName")
                    expect(response.body[0]).to.have.property("LastName")
                    expect(response.body[0]).to.have.property("Birthday")
                    expect(response.body[0]).to.have.property("TREmail")
                    expect(response.body[0]).to.have.property("CurrentPosition")
                    expect(response.body[0]).to.have.property("Department")
                    expect(response.body[0]).to.have.property("Contact")
                    expect(response.body[0]).to.have.property("Status")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })

        it('Present projects is indicated by passing the is_current parameter to "1"', () => {
            cy.getSpecificEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Error getting employee with employee number: 093022. Employee doesn't exist.")
                })
        })

        it('Fetch project record must have the following details in the response:id, employee_id, project_name, tech_tools, domain_name, image_url, start_date, end_date, is_current', () => {
            cy.getSpecificEmployeeEmpty()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Invalid employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Missing employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Missing URL request path structure must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })
    })

    describe('User Profile Projects List for Present Projects, As an Employee API', () => {
        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using an empty token', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('Present projects is indicated by passing the is_current parameter to "1"', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body[0]).to.have.property("EmployeeNumber")
                    expect(response.body[0]).to.have.property("FirstName")
                    expect(response.body[0]).to.have.property("LastName")
                    expect(response.body[0]).to.have.property("TREmail")
                    expect(response.body[0]).to.have.property("CurrentPosition")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })
    })

    describe('User Profile Projects List for Past Projects, As an HR Personnel API', () => {
        it('I should be able to fetch employees project records',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using a invalid token', () => {
            cy.getSpecificEmployeeInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee projects with empty token', () => {
            cy.getSpecificEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Fetch employee record must have the following details in the response: project, totalRecords', () => {
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber")
                    expect(response.body[0]).to.have.property("FirstName")
                    expect(response.body[0]).to.have.property("LastName")
                    expect(response.body[0]).to.have.property("Birthday")
                    expect(response.body[0]).to.have.property("TREmail")
                    expect(response.body[0]).to.have.property("CurrentPosition")
                    expect(response.body[0]).to.have.property("Department")
                    expect(response.body[0]).to.have.property("Contact")
                    expect(response.body[0]).to.have.property("Status")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })

        it('Past projects is indicated by passing the is_current parameter to "0"', () => {
            cy.getSpecificEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Error getting employee with employee number: 093022. Employee doesn't exist.")
                })
        })

        it('Fetch project record must have the following details in the response:id, employee_id, project_name, tech_tools, domain_name, image_url, start_date, end_date, is_current', () => {
            cy.getSpecificEmployeeEmpty()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Invalid employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Missing employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Missing URL request path structure must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })
    })

    describe('User Profile Projects List for Past Projects, As an Employee API', () => {
        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should be able to fetch a specific employee projects using a valid token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee projects using an empty token', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('Past projects is indicated by passing the is_current parameter to "0"', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body[0]).to.have.property("EmployeeNumber")
                    expect(response.body[0]).to.have.property("FirstName")
                    expect(response.body[0]).to.have.property("LastName")
                    expect(response.body[0]).to.have.property("TREmail")
                    expect(response.body[0]).to.have.property("CurrentPosition")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })
    })
}