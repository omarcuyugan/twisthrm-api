{
    describe('Edit News Feed API as an HR Personnel ', () => {
        it('Should be able to edit post by passing valid token', () => {
            cy.editPost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated")
                })
        })
        it('Verify it returns a success status code and a "Successfully updated" message', () => {
            cy.successPost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated")
                })
        })
        it('Verify it returns a fail status code and a "Updating Failed" message', () => {
            cy.failUpdate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Updating Failed")
                })
        })
        it('Should not be able to edit post by passing invalid token', () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid Token")
                })
        })
        it('Empty token must be validated', () => {
            cy.emptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid Token")
                })
        })
    
        it('Verify the ablity to update and image/photo', () => {
            cy.editImage()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated")
                })
        })
        it('Verify the ablity to update the type of post', () => {
            cy.editTypePost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully updated")
        })    
    })
    it('Verify the ablity to update the content of post', () => {
        cy.editContentPost()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully updated")
            })
    })
    it('Verify that the edited field should reflect on the database', () => {
        cy.getUpdatedPost()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
            })
    })
    it('Invalid request URL path must be validated', () => {
        cy.invalidUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response).to.include("Cannot PUT /twisthrm/api/v1/newsfd/")
            })
    })
    it('Empty request URL path must be validated', () => {
        cy.emptyUrl()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response).to.include("Cannot PUT /twisthrm/api/v1/")
            })
    })
    it('Editing the non-editable fields must be validated', () => {
        cy.nonEditField()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Updating Failed")
            })
    })
    it('Invalid file formats must be validated', () => {
        cy.invalidFileFormat()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Invalid or unknown image file format.")
            })
    })
    it('Verify when adding image file with exceeded file size', () => {
        cy.invalidFileSize()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "File size limit exceeded. Please select a file less than 10MB.")
            })
    })

})
}

