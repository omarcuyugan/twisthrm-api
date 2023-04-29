{
    describe('Add and Update Comment News feed API as an HR Personnel ', () => {
        // it('I should be able to add comment to a specific post by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
        //     cy.commentNewsFeedHr()

        //         .then(response => {
        //             const body = JSON.parse(response.body.comment);
        //             expect(response.status).to.eq(200)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message")
        //             expect(body).to.have.property("content","add comment from cypress")
                 
        //         })
        // })
        // it('I should not be able to add comment to a specific post  by passing invalid token',{ tags: '@coreRegression' }, () => {
        //     cy.invalidTokenAddComment()
        //         .then(response => {
        //             expect(response.status).to.eq(401)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message", "Invalid token")
        //         })
        // })
        // it('I should not be able to add comment to a specific post  by passing missing token', () => {
        //     cy.missingToken()
        //         .then(response => {
        //             expect(response.status).to.eq(401)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.include("ACCESS DENIED")
        //         })
    //     })
        // it('Verify that the comment has successfully added to a specific post',{ tags: ['@smoke','@coreRegression']}, () => {
        //     cy.commentNewsFeed()
        //         .then(response => {
        //             const body = JSON.parse(response.body.comment);
        //             expect(response.status).to.eq(200)
        //             expect(response).to.have.property("body")
        //             expect(body).to.have.property("postId")
        //             expect(body).to.have.property("content", "add comment from cypress")
        //         })
        // })
        it('Invalid URL path must be validated', () => {
            cy.invalidURLComment()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/new-comment/309220")
                })
        })
    //     it('Missing URL path must be validated', () => {
    //         cy.missingURL()
    //             .then(response => {
    //                 expect(response.status).to.eq(404)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.include("Cannot POST /twisthrm/api/newsfeed/delete")
    //             })
    //     })
    //     it('Invalid required Fields must be validated', () => {
    //         cy.invalidFields()
    //             .then(response => {
    //                 expect(response.status).to.eq(400)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "No matching post id of post- at newsfeed/stage/general/1 and newsfeed/stage/general/1")
    //             })
    //     })
    //     it('Missing required Fields must be validated', { tags: '@coreRegression' },() => {
    //         cy.missingFields()
    //             .then(response => {
    //                 expect(response.status).to.eq(400)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "Comment does not contain any text")
    //             })
    //     })
    //     // //update comment 

    //     it('I should be able to update comment to a specific post by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
    //         cy.commentNewsFeedHr();
    //         cy.updateComment()
    //             .then(response => {
    //                 expect(response.status).to.eq(200)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "Successfully Updated Comment .")
    //             })
    //     })
    //     it('I should not be able to update comment to a specific post  by passing invalid token',{ tags: '@coreRegression' }, () => {
    //         cy.invalidToken()
    //             .then(response => {
    //                 expect(response.status).to.eq(401)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "Invalid token")
    //             })
    //     })

    //     it('I should not be able to update comment to a specific post  by passing missing token', () => {
    //         cy.missingToken()
    //             .then(response => {
    //                 expect(response.status).to.eq(401)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.include("ACCESS DENIED")
    //             })
    //     })
    //     it('Verify that the comment has successfully update to a specific post',{ tags: ['@smoke','@coreRegression']}, () => {
    //         cy.updateComment()
    //             .then(response => {
    //                 expect(response.status).to.eq(200)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body.updatedComment).to.have.property("id")
    //                 expect(response.body.updatedComment).to.have.property("postId")
    //                 expect(response.body.updatedComment).to.have.property("content", "edit comment from cypress")
    //             })
    //     })
    //     it('Invalid required Fields must be validated',{ tags: '@coreRegression' }, () => {
    //         cy.invalidFieldComment()
    //             .then(response => {
    //                 expect(response.status).to.eq(400)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "The post where you are trying to edit a comment is not found.")
    //             })
    //     })
    //     it('Missing required Fields must be validated', () => {
    //         cy.missingFieldComment()
    //             .then(response => {
    //                 expect(response.status).to.eq(400)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "The post where you are trying to edit a comment is not found.")
    //             })
    //     })
    //     it('Empty required Fields must be validated', () => {
    //         cy.emptyFieldComment()
    //             .then(response => {
    //                 expect(response.status).to.eq(400)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message", "The post where you are trying to edit a comment is not found.")
    //             })
    //     })
    // })

    // describe('Add and Update Comment News feed API as an Employee', () => {
    //     it('I should be able to add comment to a specific post by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
    //         cy.commentNewsFeed()
    //             .then(response => {
    //                 expect(response.status).to.eq(200)
    //                 expect(response).to.have.property("body")
    //                 expect(response.body).to.have.property("message")
    //                 expect(response.body.comment).to.have.property("content", "add comment from cypress")
    //             })
    //     })
    // })
    // it('I should be able to update comment to a specific post by passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
    //     cy.commentNewsFeed();
    //     cy.updateCommentEmployee()
    //         .then(response => {
    //             expect(response.status).to.eq(200)
    //             expect(response).to.have.property("body")
    //             expect(response.body).to.have.property("message", "Successfully Updated Comment .")
    //         })
    })
}

