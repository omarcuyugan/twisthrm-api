{
    describe('User Profile Display, As an HR Personnel API', () => {
        it('I should be able to fetch a specific employee using a valid token', () => {
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('I should not be able to fetch a specific employee using an invalid token', () => {
            cy.getSpecificEmployeeInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })

        it('I should not be able to fetch a specific employee using without a token', () => {
            cy.getSpecificEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Fetch employee record must have the following details in the response', () => {
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
                    expect(response.body[0]).to.have.property("Team")
                    expect(response.body[0]).to.have.property("Contact")
                    expect(response.body[0]).to.have.property("Status")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })

        it('Invalid employee ID must be validated', () => {
            cy.getSpecificEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Error getting employee with employee number: 093022. Employee doesn't exist.")
                })
        })

        it('Missing employee ID must be validated', () => {
            cy.getSpecificEmployeeEmpty()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
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

    })
    describe('User Profile Display, As an Employee API', () => {
        it('I should be able to fetch a specific employee using a valid token', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-431")
                })
        })

        it('Fetch employee record must have the following details in the response:', () => {
            cy.getSpecificEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body[0]).to.have.property("EmployeeNumber")
                    expect(response.body[0]).to.have.property("FirstName")
                    expect(response.body[0]).to.have.property("LastName")
                    expect(response.body[0]).to.have.property("TREmail")
                    expect(response.body[0]).to.have.property("CurrentPosition")
                    expect(response.body[0]).to.have.property("Team")
                    expect(response.body[0]).to.have.property("Nickname")
                })
        })
    })
}