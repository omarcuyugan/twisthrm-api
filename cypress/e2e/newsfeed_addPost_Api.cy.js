{
    describe('Add Post - Text Only API', () => {
        it('Should be able to post on the newsfeed section by passing valid token', () => {
            cy.postText()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                })
        })

        it('Should not be able to post on the newsfeed section by passing invalid token', () => {
            cy.postInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })

        it('Empty keys "content" and "file" must be validated', () => {
            cy.emptyContentAndFile()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Post must contain either a text or an image")

                })
        })

        it('The default type of post must be standard', () => {
            cy.postText()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("type", "standard")
                })
        })

        it('Should be able to post using a post type "Announcement"', () => {
            cy.postTextAnnouncement()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("type", "announcement")
                })
        })

        it('Should be able to post using a post type "Birthday"', () => {
            cy.postTextBirthday()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("type", "birthday")
                })
        })

        it('Should be able to post using a post type "Event"', () => {
            cy.postTextEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("type", "event")
                })
        })

        it('Invalid Url path must be validated', () => {
            cy.newsfeedInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/newsfeeds/")
                })
        })

        it('"id" response data must be generated automatically upon creating a new post', () => {
            cy.postText()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                })
        })

        it('The Response must contain the following upon successful post', () => {
            cy.postText()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("content")
                    expect(response.body).to.have.property("firstName")
                    expect(response.body).to.have.property("lastName")
                    expect(response.body).to.have.property("userId")
                    expect(response.body).to.have.property("type")
                    expect(response.body).to.have.property("createdAt")
                    expect(response.body).to.have.property("updatedAt")
                    expect(response.body).to.have.property("isDel")
                })
        })

    })
    describe('Add Post - With Image API', () => {
        it('Should be able to post on the newsfeed section by passing valid token', () => {
            cy.postWithImage()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                })
        })

        it('Should not be able to post on the newsfeed section by passing invalid token', () => {
            cy.postWithImageInvalidToken()
                .then(response => {
                    const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(401)
                    expect(body).to.be.a("string")
                    expect(body).to.include("Invalid token")
                })

        })

        it('Empty keys "content" and "file" must be validated', () => {
            cy.emptyContentAndFile()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Post must contain either a text or an image")
                })

        })

        it('The default type of post must be standard', () => {
            cy.postWithImageStandard()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                    expect(body).to.have.property("type", "standard")
                })
        })

        it('Should be able to post using a post type "Announcement"', () => {
            cy.postWithImageAnnouncement()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                    expect(body).to.have.property("type", "announcement")
                })
        })

        it('Should be able to post using a post type "Birthday"', () => {
            cy.postWithImageBirthday()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                    expect(body).to.have.property("type", "birthday")
                })
        })

        it('Should be able to post using a post type "Event"', () => {
            cy.postWithImageEvent()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                    expect(body).to.have.property("type", "event")
                })
        })

        it('Should be able to post when there is a value in all the keys in form data except "content"', () => {
            cy.postWithImageEvent()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                })
        })

        it('Invalid Url path must be validated', () => {
            cy.postWithImageInvalidURL()
                .then(response => {
                    const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(body).to.include("Cannot POST /twisthrm/api/v1/newsfeeds/")

                })
        })

        it('"id" response data must be generated automatically upon creating a new post', () => {
            cy.postWithImage()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                })
        })

        it('The Response must contain the following upon successful post', () => {
            cy.postWithImage()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("id")
                    expect(body).to.have.property("content")
                    expect(body).to.have.property("firstName")
                    expect(body).to.have.property("lastName")
                    expect(body).to.have.property("userId")
                    expect(body).to.have.property("type")
                    expect(body).to.have.property("createdAt")
                    expect(body).to.have.property("updatedAt")
                    expect(body).to.have.property("isDel")
                    expect(body).to.have.property("imageURL")
                })
        })

        it('Invalid file formats must be validated', () => {
            cy.postWithImageInvalidFile()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(415)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "Invalid or unknown image file format.")
                })
        })
    })
}