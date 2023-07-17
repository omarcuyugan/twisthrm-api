{
    describe('Get News Feed API as an HR Personnel ', () => {
        it('Should be able to get the list of post in news feed by passing valid token',{ tags: '@coreRegression' }, () => {
            cy.newsFeedPostHr()
                .then(response => {
                    let count = Cypress.$(response.body).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response).to.have.property("body").to.have.length(count)
                })
        })
        it('Should not be able to get the list of post by passing invalid token',{ tags: '@coreRegression' }, () => {
            cy.invalidTokenHr()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('Should not be able to get the list of post by passing missing token', () => {
            cy.missingTokenHr()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('Empty token must be validated', () => {
            cy.emptyTokenHr()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.postContentsHr()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    for (let i = 0; i < response.body.length; i++) {
                        const post = response.body[i]
                        if (post.hasOwnProperty("imageURL")) {
                            expect(post).to.have.property("content")
                            expect(post).to.have.property("postType")
                            expect(post).to.have.property("createdAt")
                            expect(post).to.have.property("imageURL")
                            break;
                        }
                    }
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPathHr()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/new-newsfeeds/")
                })
        })
        it('Empty groupId parameter must be validated', () => {
            cy.emptyGroupIdHr()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Group ID should not be empty")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURLHr()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                })
        })
        it('Invalid groupId parameter must be validated',{ tags: '@coreRegression' }, () => {
            cy.invalidParameterNewsFeedSectionHr()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message","Invalid group ID")
                })
        })
    })
}
//employee
{
    describe('Get News Feed API as an Employee ', () => {
        it('Should be able to get the list of post in news feed by passing valid token', () => {
            cy.newsFeedPostEmp()
                .then(response => {
                    let count = Cypress.$(response.body).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response).to.have.property("body").to.have.length(count)
                })
        })
        it('Should not be able to get the list of post by passing invalid token',{ tags: '@coreRegression' }, () => {
            cy.invalidTokenEmp()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('Should not be able to get the list of post by passing missing token', () => {
            cy.missingTokenEmp()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('Empty token must be validated', () => {
            cy.emptyTokenEmp()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.postContentsEmp()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    for (let i = 0; i < response.body.length; i++) {
                        const post = response.body[i]
                        if (post.hasOwnProperty("imageURL")) {
                            expect(post).to.have.property("content")
                            expect(post).to.have.property("postType")
                            expect(post).to.have.property("createdAt")
                            expect(post).to.have.property("imageURL")
                            break;
                        }
                    }
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPathEmp()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/new-newsfeeds/")
                })
        })
        it('Empty groupId parameter must be validated', () => {
            cy.emptyGroupIdEmp()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Group ID should not be empty")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURLEmp()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                })
        })
        it('Invalid groupId parameter must be validated',{ tags: '@coreRegression' }, () => {
            cy.invalidGroupIdEmp()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message","Invalid group ID")
                })
        })
    })
}
