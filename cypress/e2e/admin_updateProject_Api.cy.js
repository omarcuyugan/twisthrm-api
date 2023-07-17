{
    describe('Update Project API as an HR Personnel', () => {
        it('I should be able to update projects upon passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.updateProject()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated Project")
                    expect(response.body).to.have.property("affectedRows", 1)
                })
        });

        it('I should not be able to update projects upon passing invalid token', () => {
            cy.updateProjectInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('I should not be able to update projects upon passing empty token', () => {
            cy.updateProjectEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });

        it('Invalid key "project_name" in the request should be validated', () => {
            cy.updateProjectInvalidKeyProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project name cannot be empty")
                })
        });

        it('Invalid key "domain" in the request should be validated', () => {
            cy.updateProjectInvalidKeyDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Domain cannot be empty")
                })
        });

        it('Invalid key "techTools" in the request should be validated', () => {
            cy.updateProjectInvalidKeyTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools cannot be empty")
                })
        });

        it('Validate parenthesis in request parameter "project_name', () => {
            cy.updateProjectParenthesisOnProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid project name format")
                })
        });

        it('Validate parenthesis in request parameter "domain', () => {
            cy.updateProjectParenthesisOnDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Domain ID")
                })
        });

        it('Validate parenthesis in request parameter "techTools', () => {
            cy.updateProjectParenthesisOnTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools must not contain string")
                })
        });

        it('Validate empty request "project_name" parameter', () => {
            cy.updateProjectEmptyProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project name cannot be empty")
                })
        });

        it('Validate empty request "domain" parameter', () => {
            cy.updateProjectEmptyDomain()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Domain cannot be empty")
                })
        });

        it('Validate empty request "techTools" parameters', () => {
            cy.updateProjectEmptyTechTools()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Technology & Tools cannot be empty")
                })
        });

        it('Validate invalid url path', () => {
            cy.updateProjectInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/project/updatess/20")
                })
        });

        it('Validate missing url path', () => {
            cy.updateProjectMissingRequestUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/project/20")
                })
        });

        it('Verify the success message upon successful modification of projects', () => {
            cy.updateProject()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated Project")
                    expect(response.body).to.have.property("affectedRows", 1)
                })
        });

        it('Duplicate project name should be validated', () => {
            cy.updateProjectDuplicateProjectName()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Project already exists.")
                })
        });

        it('Invalid file for the logo must be validated', () => {
            cy.updateProjectInvalidFile()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "Invalid or unknown image file format.")
                })
        });

        it('More than 1 MB file size must be validated', () => {
            cy.updateProjectMoreThan1MBFile()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "File size limit exceeded. Please select a file less than 1MB.")
                })
        });
    })
}