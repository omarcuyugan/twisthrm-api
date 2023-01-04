{
    describe('User Profile Details, As an HR Personnel API', () => {
        it('Should be able to fetch user details by passing valid token', () => {
            cy.getSpecificEmployee2()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.length("1")
                    expect(response.body[0]).to.have.property("EmployeeNumber", "093022-432")
                })
        })

        it('Should not be able to fetch user details by passing invalid token', () => {
            cy.getSpecificEmployeeInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })

        it('Missing token must be validated', () => {
            cy.getSpecificEmployeeNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })

        it('Should be able to fetch user by passing valid Employee number', () => {
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

        it('Should not be able to fetch user by passing valid Employee number', () => {
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

        it('Invalid Url path must be validated', () => {
            cy.getSpecificEmployeeInvalidUrl2()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employeess/093022-432")
                })
        })

        it('Fetch employee record must have the following details in the response', () => {
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

        it('Invalid objects should be validated', () => {
            cy.updateWithInvalidObject()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message","Error updating employee with employee number: 093022-432.")
            })
        })

        it('I should be able to edit the editable fields ', () => {
            cy.updateEmployeeAsHrPersonnel()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("data","093022-432")
                expect(response.body).to.have.property("message","Employee successfully updated.")
            })
            cy.getSpecificEmployee2()
            .then(response => {
                expect(response.body[0]).to.have.property("FirstName","Daniel McCoyy")
                expect(response.body[0]).to.have.property("LastName","MOLLINA")
                expect(response.body[0]).to.have.property("Nickname","McCoy Test")
            })
        })
    
    })
    describe('User Profile Details, As an Employee API', () => {
        it('Fetch employee record must have the following details in the response', () => {
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

        it('I should be able to edit my information with the editable fields', () => {
            cy.updateEmployeeAsEmployee()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("data","093022-431")
                expect(response.body).to.have.property("message","Employee successfully updated.")
            })
            cy.getSpecificEmployee()
            .then(response => {
                expect(response.body[0]).to.have.property("FirstName","Earll Anthony")
                expect(response.body[0]).to.have.property("LastName","FERNANDEZZ")
                expect(response.body[0]).to.have.property("Nickname","Tonton")
            })
        })

        it('I should not be able to edit other employees information with the editable fields', () => {
            cy.updateOtherEmployeeAsEmployee()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message","You don't have the right permission for this action")
            })
        })
    })
}