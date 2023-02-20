{
    describe('Get News Feed API as an HR Personnel ', () => {
        it('Should be able to get the list of post in news feed by passing valid token',{ tags: '@coreRegression' }, () => {
            cy.newsFeedPost()
                .then(response => {
                    let count = Cypress.$(response.body.data).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("data").to.have.length(count)
                })
        })
        it('Should not be able to get the list of post by passing invalid token',{ tags: '@coreRegression' }, () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('Should not be able to get the list of post by passing missing token', () => {
            cy.missingToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
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
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.postContents()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    for (let i = 0; i < response.body.data.length; i++) {
                        const post = response.body.data[i]
                        if (post.hasOwnProperty("imageURL")) {
                            expect(post).to.have.property("content")
                            expect(post).to.have.property("type")
                            expect(post).to.have.property("createdAt")
                            expect(post).to.have.property("imageURL")
                            break;
                        }
                    }
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeeds")
                })
        })
        it('Empty parameter must be validated', () => {
            cy.emptyParameter()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURL()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                })
        })
        it('Invalid request parameter must be validated',{ tags: '@coreRegression' }, () => {
            cy.invalidParameterNewsFeedSection()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id").to.be.null
                })
        })
    })
}
//employee
{
    describe('Get News Feed API as an Employee ', () => {
        it('Should be able to get the list of post in news feed by passing valid token', () => {
            cy.newsFeedPost()
                .then(response => {
                    let count = Cypress.$(response.body.data).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("data").to.have.length(count)
                })
        })
        it('Should not be able to get the list of post by passing invalid token',{ tags: '@coreRegression' }, () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('Should not be able to get the list of post by passing missing token', () => {
            cy.missingToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
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
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.postContents()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    for (let i = 0; i < response.body.data.length; i++) {
                        const post = response.body.data[i]
                        if (post.hasOwnProperty("imageURL")) {
                            expect(post).to.have.property("content")
                            expect(post).to.have.property("type")
                            expect(post).to.have.property("createdAt")
                            expect(post).to.have.property("imageURL")
                            break;
                        }
                    }
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeeds")
                })
        })
        it('Empty parameter must be validated', () => {
            cy.emptyParameter()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURL()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                })
        })
        it('Invalid request parameter must be validated',{ tags: '@coreRegression' }, () => {
            cy.invalidParameterNewsFeedSection()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("id").to.be.null
                })
        })
    })
}
