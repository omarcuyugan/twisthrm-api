{
    describe('Delete Comment News feed API as an HR Personnel ', () => {
        it('I should be able to delete comment to a specific post by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.deleteComment()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Deleted Comment .")
                })
        })
        it('I should not be able to delete comment to a specific post by passing invalid token', () => {
            cy.invalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })
        it('I should not be able to delete comment to a specific post  by passing missing token', () => {
            cy.missingToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        })
        it('Invalid URL path must be validated', () => {
            cy.invalidUrlPathDeleteComment()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/comments/deletes")
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
            cy.invalidField()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "The post where you are trying to delete a comment is not found.")
                })
        })

        it('Missing required Fields must be validated', () => {
            cy.missingField()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "The post where you are trying to delete a comment is not found.")
                })
        })

        it('Empty required Fields must be validated', () => {
            cy.emptyField()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "The post where you are trying to delete a comment is not found.")
                })
        })
    })

    describe('Delete Comment News feed API as an Employee ', () => {
        it('I should be able to delete my comment', { tags: ['@smoke', '@coreRegression'] }, () => {
            cy.deleteCommentEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Deleted Comment .")
                })
        })
        it('I should be able to delete any comment on my post', () => {
            cy.postText();
            cy.commentNewsFeedHr();
            cy.deleteCommentOnMyPostEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Deleted Comment .")
                })
        })

        it('I should not be able to delete other employee comment on other posts', () => {
            cy.commentNewsFeedHr();
            cy.deleteCommentOnOtherPostEmployee()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You are not allowed to delete this comment.")
                })
        })
    })
}

