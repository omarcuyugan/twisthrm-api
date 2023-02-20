{
    describe("Delete post as an HR Personnel", () => {
        it("I should be able to delete post",{ tags: ['@smoke','@coreRegression']}, () => {
            cy.deletePost()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Deleted Post.")
                })
        });

        // it("I should not be able to delete post with invalid token", { tags: '@coreRegression' },() => {
        //     cy.deleteInvalidToken()
        //         .then(response => {
        //             expect(response.status).to.eq(401)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message", "Invalid token")
        //         })
        // });

        // it("I should not be able to delete post with empty token", () => {
        //     cy.deleteEmptyToken()
        //     .then(response => {
        //         expect(response.status).to.eq(401)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.include("ACCESS DENIED")
        //     })
        // });

        it("Verify that the delete function only works if user is the owner of the post or an admin.",{ tags: '@coreRegression' }, () => {
            cy.deletePost()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully Deleted Post.")
            })
        });

        // it("Invalid request URL path must be validated", () => {
        //     cy.invalidURLDeletePost()
        //         .then(response => {
        //             expect(response.status).to.eq(404)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/newsfeed/deletess")
        //         })
        // });

        // it("Missing request URL path must be validated", () => {
        //     cy.missingURLDeletePost()
        //     .then(response => {
        //         expect(response.status).to.eq(404)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.include("Cannot PUT /twisthrm/api/newsfeed/delete")
        //     })
        // });

        // it("Invalid request parameters must be validated",{ tags: '@coreRegression' }, () => {
        //     cy.invalidParameterDeletePost()
        //         .then(response => {
        //             expect(response.status).to.eq(400)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message", "Invalid Request")
        //         })
        // });

        // it("Empty request parameters must be validated", () => {
        //     cy.emptyParameterDeletePost()
        //     .then(response => {
        //         expect(response.status).to.eq(400)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.have.property("message", "Invalid Request")
        //     })
        // });

        // it("Missing request parameters must be validated", () => {
        //     cy.missingParameterDeletePost()
        //     .then(response => {
        //         expect(response.status).to.eq(400)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.have.property("message", "Invalid Request")
        //     })
        // });
    })
}

{
    describe("Delete post as an Employee", () => {
        it("I should be able to delete post", { tags: ['@smoke','@coreRegression']},() => {
            cy.deleteURL()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Deleted Post.")
                })
        });

        // it("I should not be able to delete post with invalid token", { tags: '@coreRegression' },() => {
        //     cy.deleteInvalidToken()
        //         .then(response => {
        //             expect(response.status).to.eq(401)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message", "Invalid token")
        //         })
        // });

        // it("I should not be able to delete post with empty token", () => {
        //     cy.deleteEmptyToken()
        //     .then(response => {
        //         expect(response.status).to.eq(401)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.include("ACCESS DENIED")
        //     })
        // });

        it("Verify that the delete function only works if user is the owner of the post.", () => {
            cy.deletePost()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message", "Successfully Deleted Post.")
            })
        });

        // it("Invalid request URL path must be validated", () => {
        //     cy.invalidURLDeletePost()
        //         .then(response => {
        //             expect(response.status).to.eq(404)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.include("Cannot PUT /twisthrm/api/v1/newsfeed/deletess")
        //         })
        // });

        // it("Missing request URL path must be validated", () => {
        //     cy.missingURLDeletePost()
        //     .then(response => {
        //         expect(response.status).to.eq(404)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.include("Cannot PUT /twisthrm/api/newsfeed/delete")
        //     })
        // });

        // it("Invalid request parameters must be validated", () => {
        //     cy.invalidParameterDeletePost()
        //         .then(response => {
        //             expect(response.status).to.eq(400)
        //             expect(response).to.have.property("body")
        //             expect(response.body).to.have.property("message", "Invalid Request")
        //         })
        // });

        // it("Empty request parameters must be validated", () => {
        //     cy.emptyParameterDeletePost()
        //     .then(response => {
        //         expect(response.status).to.eq(400)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.have.property("message", "Invalid Request")
        //     })
        // });

        // it("I should not be able to delete other employee's post", () => {
        //     cy.deleteOtherEmployeePost()
        //     .then(response => {
        //         expect(response.status).to.eq(400)
        //         expect(response).to.have.property("body")
        //         expect(response.body).to.have.property("message", "Invalid Request")
        //     })
        // });
    })
}