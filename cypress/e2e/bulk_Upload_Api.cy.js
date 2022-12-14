{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")


    describe('Bulk Upload, As an HR Personnel', () => {
        it('I should be able to upload employee details by passing valid token', () => {
            cy.uploadWithValidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                })
        })
        it('I should not be able to upload using an invalid authorization token', () => {
            cy.invalidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(401)
                    expect(bodyString).to.be.a("string")
                })
        });

        it('I should not be able to upload when there is no authorization token', () => {
            cy.withoutToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(401)
                    expect(bodyString).to.be.a("string")
                })
        });

        it('I should be able to upload a valid csv file', () => {
            cy.uploadWithValidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                })
        });

        it('A validation message is displayed when uploading a non-CSV file', () => {
            cy.uploadNonCsv()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(415)
                    expect(body).to.have.property("message", "The uploaded file is not a csv")
                })

        })

        it('Invalid url path structure must be validated', () => {
            cy.invalidUrl()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(404)
                    expect(bodyString).to.be.a("string")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Employee ID', () => {
            cy.invalidHeaderEmployeeId()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Last Name', () => {
            cy.invalidHeaderLastName()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })

        })

        it('I should not be able to upload when the CSV file does not contain the same header First Name', () => {
            cy.invalidHeaderFirstName()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Birthday', () => {
            cy.invalidHeaderBirthday()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Department', () => {
            cy.invalidHeaderDepartment()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Position', () => {
            cy.invalidHeaderPosition()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Employee Status', () => {
            cy.invalidHeaderEmployeeStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })

        })

        it('I should not be able to upload when the CSV file does not contain the same header Contact', () => {
            cy.invalidHeaderContact()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('I should not be able to upload when the CSV file does not contain the same header Email', () => {
            cy.invalidHeaderEmail()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing or invalid headers")
                })
        })

        it('Missing required field "Employee ID" must be validated', () => {
            cy.missingEmployeeId()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })

        })

        it('Missing required field "Last Name" must be validated', () => {
            cy.missingLastName()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "First Name" must be validated', () => {
            cy.missingFirstName()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Birthday" must be validated', () => {
            cy.missingBirthday()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Department must be validated', () => {
            cy.missingDepartment()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Position" must be validated', () => {
            cy.missingPosition()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Employee Status" must be validated', () => {
            cy.missingEmployeeStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Contact" must be validated', () => {
            cy.missingContact()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('Missing required field "Email" must be validated', () => {
            cy.missingEmail()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('A message should be displayed when uploading an empty csv file', () => {
            cy.emptyCsv()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(body).to.have.property("message", "Uploaded CSV file contains missing fields")
                })
        })

        it('The csv file name must be in the correct format', () => {
            cy.uploadWithValidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                })
        })

        it('Outdated csv file names are rejected', () => {
            cy.outdatedFileName()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(415)
                    expect(body).to.have.property("message", "The uploaded file's name is not valid")
                })
        })

        it('The following details must be included in the response upon successful upload', () => {
            cy.uploadWithValidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message")
                    expect(body).to.have.property("uploadedEmployeesTotal")
                    expect(body).to.have.property("addedEmployeeCount")
                    expect(body).to.have.property("updatedEmployeeCount")
                })
        })

        it('An error message should display when there is no file selected', () => {
            cy.noFile()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "No file was uploaded.")
                })
        })

        // it('Ignore employee data in the csv file when the employee details has no changes in employee record', () => {
        // })

        it('Employee status "Resigned" will be removed from the Employee List', () => {
            cy.resignedStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                    cy.request({
                        method: 'GET',
                        url: '/twisthrm/api/v1/employee/000000-111',
                        headers: {
                            'auth-token': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    }).then(response => {
                        expect(response.status).to.eq(400)
                        expect(response).to.have.property("body")
                        expect(response.body).to.have.property("message", "Error getting employee with employee number: 000000-111. Employee doesn't exist.")
                    })
                })
        })

        it('Employee status "Terminated" will be removed from the Employee List', () => {
            cy.terminatedStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                    cy.request({
                        method: 'GET',
                        url: '/twisthrm/api/v1/employee/000000-112',
                        headers: {
                            'auth-token': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    }).then(response => {
                        expect(response.status).to.eq(400)
                        expect(response).to.have.property("body")
                        expect(response.body).to.have.property("message", "Error getting employee with employee number: 000000-112. Employee doesn't exist.")
                    })
                })
        })

        it('Employee status "OJT ended" will be removed from the Employee List', () => {
            cy.ojtEndedStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                    cy.request({
                        method: 'GET',
                        url: '/twisthrm/api/v1/employee/000000-113',
                        headers: {
                            'auth-token': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    }).then(response => {
                        expect(response.status).to.eq(400)
                        expect(response).to.have.property("body")
                        expect(response.body).to.have.property("message", "Error getting employee with employee number: 000000-113. Employee doesn't exist.")
                    })
                })
        })

        it('Employee status "End of Contract" will be removed from the Employee List', () => {
            cy.endOfContractStatus()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(body).to.have.property("message", "Successful File Upload")
                    cy.request({
                        method: 'GET',
                        url: '/twisthrm/api/v1/employee/000000-114',
                        headers: {
                            'auth-token': token.hrPersonnel,
                        },
                        failOnStatusCode: false
                    }).then(response => {
                        expect(response.status).to.eq(400)
                        expect(response).to.have.property("body")
                        expect(response.body).to.have.property("message", "Error getting employee with employee number: 000000-114. Employee doesn't exist.")
                    })
                })
        })
    });

    describe('Bulk Upload, As an Employee', () => {
        it('I should not be able to upload employee details by passing employee token', () => {
            cy.employeeToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(422)
                    expect(bodyString).to.be.a("string")
                    expect(body).to.have.property("message", "you don't have the right permission for this action")
                })
        })

        it('I should not be able to upload using an invalid authorization token', () => {
            cy.invalidToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(401)
                    expect(bodyString).to.be.a("string")
                })
        })

        it('I should not be able to upload when there is no authorization token', () => {
            cy.withoutToken()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(401)
                    expect(bodyString).to.be.a("string")
                })
        })
    });
}
