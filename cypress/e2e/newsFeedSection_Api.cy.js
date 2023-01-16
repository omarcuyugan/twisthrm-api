{
    describe('Get News Feed API as an HR Personnel ', () => {
        it('Should be able to get the list of post in news feed by passing valid token', () => {
            cy.newsFeedPost()
                .then(response => {
                    let count = Cypress.$(response.body.data).length
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("data").to.have.length(count)
                })
        })
        it('Should not be able to get the list of post by passing invalid token', () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
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
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post', () => {
            cy.postContents()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.data[0]).to.have.property("content")
                    expect(response.body.data[0]).to.have.property("type")
                    expect(response.body.data[0]).to.have.property("createdAt")
                    expect(response.body.data[5]).to.have.property("imageURL")
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed322s/general/27")
                })
        })
        it('Empty parameter must be validated', () => {
            cy.emptyParameter()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed/")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURL()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")  
                   // console.log();
        })    
    })
    it('Invalid request parameter must be validated', () => {
        cy.invalidParameter()
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
        it('Should not be able to get the list of post by passing invalid token', () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
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
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('The Response must contain the following, time of posting, content of post, type of post, imageUrl preview of the post', () => {
            cy.postContents()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body.data[0]).to.have.property("content")
                    expect(response.body.data[0]).to.have.property("type")
                    expect(response.body.data[0]).to.have.property("createdAt")
                    expect(response.body.data[5]).to.have.property("imageURL")
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPath()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed322s/general/27")
                })
        })
        it('Empty parameter must be validated', () => {
            cy.emptyParameter()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/newsfeed/")
                })
        })
        it('Verify that the imageURL is clickable and previews the image', () => {
            cy.imageURL()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")  
        })    
    })
    it('Invalid request parameter must be validated', () => {
        cy.invalidParameter()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("id").to.be.null
            })
    })
})
}
