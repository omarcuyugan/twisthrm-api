{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const deleteComment = require("../fixtures/requestBody/deleteComment.json")

    Cypress.Commands.add('deleteComment', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data
                let firstPost = post[0].id
                let firstElementId = post[0].elementIds
                let firstComment = post[0].comments[0].id
                cy.log(firstComment)
                cy.request({
                    method: 'PUT',
                    url: url.deleteComment,
                    body: {
                        "postId": firstPost,
                        "elementIds": firstElementId,
                        "commentId": firstComment
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('invalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteComment,
            body: deleteComment.deleteComment,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingToken', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteComment,
            body: deleteComment.deleteComment,
            headers: {
                'Authorization': " ",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPathDeleteComment', () => {
        cy.request({
            method: 'PUT',
            url: url.invalidDelComment,
            body: deleteComment.deleteComment,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingUrlPath', () => {
        cy.request({
            method: 'PUT',
            url: url.missingUrl,
            body: deleteComment.deleteComment,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidField', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteComment,
            body: deleteComment.invalidField,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingField', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteComment,
            body: deleteComment.missingField,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyField', () => {
        cy.request({
            method: 'PUT',
            url: url.deleteComment,
            body: deleteComment.missingField,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('deleteCommentEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data
                let firstPost = post[0].id
                let firstPostUserId = post[0].userId
                let firstElementId = post[0].elementIds
                let myComment = post[0].comments.filter(comment => comment.userId === "093022-431")
                let myCommentId = myComment[0].id
                let myCommentUserId = myComment[0].userId
                cy.log(myCommentId)
                cy.request({
                    method: 'PUT',
                    url: url.deleteComment,
                    body: {
                        "postId": firstPost,
                        "postUserId": firstPostUserId,
                        "elementIds": firstElementId,
                        "commentId": myCommentId,
                        "commentUserId": myCommentUserId
                    },
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('deleteCommentOnMyPostEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let post = response.body.data.filter(post => post.userId === "093022-431")
                let myPost = post[0].id
                let myPostUserId = post[0].userId
                let firstElementId = post[0].elementIds
                let anyComment = post[0].comments[0].id
                let anyCommentUserId = post[0].comments[0].userId
                cy.log(anyCommentUserId)
                cy.request({
                    method: 'PUT',
                    url: url.deleteComment,
                    body: {
                        "postId": myPost,
                        "postUserId": myPostUserId,
                        "elementIds": firstElementId,
                        "commentId": anyComment,
                        "commentUserId": anyCommentUserId
                    },
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('deleteCommentOnOtherPostEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(response => {
            let allPosts = response.body.data;
            let otherUserPosts = allPosts.filter(post => post.userId !== "093022-431");
          
            if (otherUserPosts.length > 0) {
              let firstOtherUserPost = otherUserPosts[0];
              let firstOtherUserPostId = firstOtherUserPost.id;
              let firstOtherUserPostUserId = firstOtherUserPost.userId;
              let firstOtherUserPostElementIds = firstOtherUserPost.elementIds;
              let otherUserComments = firstOtherUserPost.comments.filter(comment => comment.userId !== "093022-431");
          
              if (otherUserComments.length > 0) {
                let firstOtherUserComment = otherUserComments[0];
                let firstOtherUserCommentId = firstOtherUserComment.id;
                let firstOtherUserCommentUserId = firstOtherUserComment.userId;
                cy.log(firstOtherUserPostId)
                cy.log(firstOtherUserPostElementIds)
                cy.log(firstOtherUserCommentId)
                cy.request({
                  method: 'PUT',
                  url: url.deleteComment,
                  body: {
                    "postId": firstOtherUserPostId,
                    "postUserId": firstOtherUserPostUserId,
                    "elementIds": firstOtherUserPostElementIds,
                    "commentId": firstOtherUserCommentId,
                    "commentUserId": firstOtherUserCommentUserId
                  },
                  headers: {
                    'Authorization': token.employeeDev,
                  },
                  failOnStatusCode: false
                });
              } else {
                cy.log("No comments created by users other than '093022-431' were found.");
              }
            } else {
              cy.log("No posts created by users other than '093022-431' were found.");
            }
          })  
    });
}