{
    describe('Add Comment News feed API as an HR Personnel ', () => {
        it('I should be able to add comment to a specific post by passing valid token', () => {
            cy.commentNewsFeed()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Inserted comment at newsfeed/stage/general/1 and newsfeed/stage/general/1")
                })
        })
        it('I should not be able to add comment to a specific post  by passing invalid token', () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Invalid token")
                })
        })
        it('I should not be able to add comment to a specific post  by passing missing token', () => {
            cy.missingToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('Verify that the comment has successfully added to a specific post', () => {
            cy.getComments()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("content")
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidURL()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/newsfeed/general/12345")
                })
        })
        it('Missing URL path must be validated', () => {
            cy.missingURL()
            .then(response => {
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Cannot POST /twisthrm/api/newsfeed/delete")
            })  
    })
    it('Invalid required Fields must be validated', () => {
        cy.invalidFields()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "No matching post id of post- at newsfeed/stage/general/1 and newsfeed/stage/general/1")
            })
    })
    it('Missing required Fields must be validated', () => {
        cy.missingFields()
            .then(response => {
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Comment does not contain any text")
            })
    })
    //update comment 

    it('I should be able to update comment to a specific post by passing valid token', () => {
        cy.updateComment()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully Updated Comment .")
            })
    })
    it('I should not be able to update comment to a specific post  by passing invalid token', () => {
        cy.invalidToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("Invalid token")
            })
    })

    it('I should not be able to update comment to a specific post  by passing missing token', () => {
        cy.missingToken()
            .then(response => {
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.include("ACCESS DENIED")
            })
    })
    it('Verify that the comment has successfully update to a specific post', () => {
        cy.getComments()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("content")
            })
    })


it('Invalid required Fields must be validated', () => {
    cy.invalidFieldComment()
        .then(response => {
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "The post where you are trying to edit a comment is not found.")
        })
})
it('Missing required Fields must be validated', () => {
    cy.missingFieldComment()
        .then(response => {
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
           expect(response.body).to.have.property("message", "Can't update comment to empty content. Try deleting it instead.")
        })
})
it('Empty required Fields must be validated', () => {
    cy.emptyFieldComment()
        .then(response => {
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "The comment you are trying to edit is not found.")
        })
})
})
}

