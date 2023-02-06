{
    describe('Our People User Profile Update Skills, As an HR Personnel API', () => {
        it('Should be able to add skills on the employees profile by passing valid token', () => {
            cy.getSpecificEmployee2()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-432")
                })
        })

        it('Should not be able to add skills on the employees profile by passing Invalid token', () => {
            cy.getSpecificEmployeeInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })

        it('Should not be able to add skills on the employees profile by passing empty token', () => {
            cy.getSpecificEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Invalid parameter "parenthesis" must be validated', () => {
            cy.getSpecificEmployee2()
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

        it('Empty/Missing fields must be validated', () => {
            cy.getSpecificEmployeeInvalid()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Error getting employee with employee number: 093022. Employee doesn't exist.")
                })
        })

        it('Invalid URL path must be validated', () => {
            cy.getSpecificEmployeeEmpty()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Missing URL path must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl2()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employeess/093022-432")
                })
        })

        it('The response must have the following -message -results', () => {
            cy.getSpecificEmployee2()
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

        it('Should be able to update skills on the employees profile', () => {
            cy.getSpecificEmployeeInvalidUrl2()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employeess/093022-432")
                })
        })
    })

    describe('Our People User Profile Update Skills, As an Employee API', () => {
        it('Should be able to add skills on my profile by passing valid token', () => {
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

        it('Should not be able to add skills on my profile by passing Invalid token', () => {
            cy.updateEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("data", "093022-431")
                    expect(response.body).to.have.property("message", "Employee successfully updated.")
                })
            cy.getSpecificEmployee()
                .then(response => {
                    expect(response.body[0]).to.have.property("FirstName", "Earll Anthony")
                    expect(response.body[0]).to.have.property("LastName", "FERNANDEZZ")
                    expect(response.body[0]).to.have.property("Nickname", "Tonton")
                })
        })

        it('Should not be able to add skills on my profile by passing empty token', () => {
            cy.updateOtherEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action")
                })
        })

        it('Should not be able to add skills on other employees profile by passing valid token', () => {
            cy.updateOtherEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action")
                })
        })

        it('Should be able to update skills on my profile', () => {
            cy.updateOtherEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action")
                })
        })

        it('Should not be able to update skills on other employees profile', () => {
            cy.updateOtherEmployeeAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action")
                })
        })
    })
}