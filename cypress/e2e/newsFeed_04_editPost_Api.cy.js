{
    describe('Edit News Feed API as an HR Personnel ', () => {
        it('Should be able to edit post by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.editPost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Post.")
                })
        })
        it('Verify it returns a success status code and a "Successfully updated" message', () => {
            cy.editPost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Post.")
                })
        })
        it('Verify it returns a fail status code and a "Updating Failed" message', { tags: '@coreRegression' },() => {
            cy.failUpdate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Updating Failed")
                })
        })
        it('Should not be able to edit post by passing invalid token',{ tags: '@coreRegression' }, () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('Empty token must be validated', () => {
            cy.emptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('Verify the ablity to update and image/photo',{ tags: '@coreRegression' }, () => {
            cy.editImage()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "Successfully Updated Post.")
                })
        })
        it('Verify the ablity to update the type of post',{ tags: '@coreRegression' }, () => {
            cy.editTypePost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Post.")
                })
        })
        it('Verify the ablity to update the content of post',{ tags: '@coreRegression' }, () => {
            cy.editContentPost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Post.")
                })
        })
        it('Verify that the edited field should reflect on the database', () => {
            cy.getUpdatedPost()
                .then(response => {
                    let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                    let firstPostIdByDaniel = postsByDaniel[0].id
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    for (let i = 0; i < response.body.data.length; i++) {
                        const post = response.body.data[i]
                        if (post.id ===(firstPostIdByDaniel)) {
                            expect(post).to.have.property("id", firstPostIdByDaniel)
                            expect(post).to.have.property("updatedAt")
                            break;
                        }
                    }
                })
        })
        it('Invalid request URL path must be validated', () => {
            cy.invalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/newsfeeds/")
                })
        })
        it('Empty request URL path must be validated', () => {
            cy.emptyUrlEditPost()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/")
                })
        })
        it('Invalid request parameter must be validated', () => {
            cy.invalidPostId()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Updating Failed")
                })
        })
        it('Empty request parameter "postId" must be validated', () => {
            cy.emptyPostId()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Updating Failed")
                })
        })
        it('Invalid file formats must be validated',{ tags: '@coreRegression' }, () => {
            cy.invalidFileFormatEditPost()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "Invalid or unknown image file format.")
                })
        })
        it('Verify when adding image file with exceeded file size', { tags: '@coreRegression' }, () => {
            cy.invalidFileSizeEdit()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "File size limit exceeded. Please select a file less than 10MB.")
                })
        })
    })
}

