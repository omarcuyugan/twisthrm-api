{
    describe('Add Project API as an HR Personnel', () => {
        it('I should be able to add a project upon passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.addProject()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('I should not be able to add a project upon passing invalid token', () => {
            cy.addProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('I should not be able to add a project upon passing empty token', () => {
            cy.addProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Duplicate project name should be validated', { tags: ['@coreRegression'] }, () => {
            cy.duplicateProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project already exists.")
                })
        });

        it('Invalid key "project_name" in the request should be validated', () => {
            cy.addProjectInvalidKeyProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project name cannot be empty")
                })
        });

        it('Invalid key "domain" in the request should be validated', () => {
            cy.addProjectInvalidKeyDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Domain cannot be empty")
                })
        });

        it('Invalid key "techTools" in the request should be validated', () => {
            cy.addProjectInvalidKeyTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools cannot be empty")
                })
        });

        it('Validate parenthesis in request parameter "project_name', () => {
            cy.addProjectParenthesisOnProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid project name format")
                })
        });

        it('Validate parenthesis in request parameter "domain"', () => {
            cy.addProjectParenthesisOnDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Domain ID")
                })
        });

        it('Validate parenthesis in request parameter "techTools"', () => {
            cy.addProjectParenthesisOnTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools must not contain string")
                })
        });

        it('Validate empty request "project_name" parameter', () => {
            cy.addProjectEmptyProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project name cannot be empty")
                })
        });

        it('Validate empty request "domain" parameters', () => {
            cy.addProjectEmptyDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Domain cannot be empty")
                })
        });

        it('Validate empty request "techTools" parameters', () => {
            cy.addProjectEmptyTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools cannot be empty")
                })
        });

        it('Validate invalid url path', () => {
            cy.addProjectInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/projects/create")
                })
        });

        it('Validate missing url path', () => {
            cy.addProjectMissingRequestUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/create")
                })
        });

        it('Validate invalid file formats when attaching a file for the logo', () => {
            cy.addProjectInvalidFile()
            .then(response => {
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString)
                expect(response.status).to.eq(500)
                expect(response).to.have.property("body")
                expect(body).to.have.property("message", "Invalid or unknown image file format.")
            })
        });

        it('Verify the success message upon successful creation of projects', () => {
            cy.addProject()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully saved!")
                expect(response.body).to.have.property("affectedRows")
            })
        });

        it('Adding a project the response must  contain the following -message, -id, -affectedRows', () => {
            cy.addProject()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows")
                })
        });
    })
}