{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const editPost = require("../fixtures/requestBody/editPost.json")

    Cypress.Commands.add('editPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.log(postsByDaniel)
                cy.request({
                    method: 'PUT',
                    url: url.newsFeedPost,
                    body: {
                        "content": "Edit Post Automation2",
                        "type": "",
                        "imageURL": "",
                        "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                        "postId": firstPostIdByDaniel,
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('failUpdate', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.log(firstPostIdByDaniel);
                cy.request({
                    method: 'PUT',
                    url: url.newsFeedPost,
                    body: {
                        "content": "Edit Post Automation",
                        "type": "standard",
                        "imageURL": "",
                        "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                        "postId": "",
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('editInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editMissingToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: editPost.editContent,
            headers: {
                'Authorization': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('editImage', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.log(firstPostIdByDaniel)
                const fileName = 'testFiles/Image.png';
                cy.fixture(fileName, 'binary').then(file => {
                    const blob = Cypress.Blob.binaryStringToBlob(file, 'file');
                    const formData = new FormData();
                    formData.append("content", "Automation Edit Image");
                    formData.append("type", "standard");
                    formData.append("elementIds", "newsfeed/stage/general/1")
                    formData.append("file", blob, fileName);
                    formData.append("postId", firstPostIdByDaniel)
                    cy.request({
                        method: 'PUT',
                        url: url.newsFeedPost,
                        body: formData,
                        headers: {
                            'Authorization': token.hrPersonnel,
                            'content-type': 'multipart/form-data'
                        },
                        failOnStatusCode: false
                    })
                })
            })
    });

    Cypress.Commands.add('editTypePost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.request({
                    method: 'PUT',
                    url: url.newsFeedPost,
                    body: {
                        "content": "Edit Post Type Automation",
                        "type": "birthdays",
                        "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                        "postId": firstPostIdByDaniel,
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('editContentPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.request({
                    method: 'PUT',
                    url: url.newsFeedPost,
                    body: {
                        "content": "Edit Post Content Automation",
                        "type": "standard",
                        "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                        "postId": firstPostIdByDaniel,
                    },
                    headers: {
                        'Authorization': token.hrPersonnel,
                    },
                    failOnStatusCode: false
                })
            })
    });

    Cypress.Commands.add('getUpdatedPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrl', () => {
        cy.request({
            method: 'PUT',
            url: url.newsfeedInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyUrlEditPost', () => {
        cy.request({
            method: 'PUT',
            url: url.emptyRequestUrlEditPost,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPostId', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: {
                "content": "Edit Post Content Automation",
                "type": "standard",
                "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                "postId": "post-",  
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPostId', () => {
        cy.request({
            method: 'PUT',
            url: url.newsFeedPost,
            body: {
                "content": "Edit Post Content Automation",
                "type": "standard",
                "elementIds": "newsfeed/stage/general/1,newsfeed/stage/general/1",
                "postId": "",  
            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidFileFormatEditPost', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.log(firstPostIdByDaniel)
                const fileName = 'testFiles/Cases Study.pdf';
                cy.fixture(fileName, 'binary').then(file => {
                    const blob = Cypress.Blob.binaryStringToBlob(file, 'file');
                    const formData = new FormData();
                    formData.append("content", "Automation Edit Image");
                    formData.append("type", "standard");
                    formData.append("elementIds", "newsfeed/stage/general/1")
                    formData.append("file", blob, fileName);
                    formData.append("postId", firstPostIdByDaniel)
                    cy.request({
                        method: 'PUT',
                        url: url.newsFeedPost,
                        body: formData,
                        headers: {
                            'Authorization': token.hrPersonnel,
                            'content-type': 'multipart/form-data'
                        },
                        failOnStatusCode: false
                    })
                })
            })
    });

    Cypress.Commands.add('invalidFileSizeEdit', () => {
        cy.request({
            method: 'GET',
            url: url.newsfeedUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
            .then(response => {
                let postsByDaniel = response.body.data.filter(post => post.userId === "093022-432")
                let firstPostIdByDaniel = postsByDaniel[0].id
                cy.log(firstPostIdByDaniel)
                const fileName = 'testFiles/15mb.jpg';
                cy.fixture(fileName, 'binary').then(file => {
                    const blob = Cypress.Blob.binaryStringToBlob(file, 'file');
                    const formData = new FormData();
                    formData.append("content", "Automation Edit Image");
                    formData.append("type", "standard");
                    formData.append("elementIds", "newsfeed/stage/general/1")
                    formData.append("file", blob, fileName);
                    formData.append("postId", firstPostIdByDaniel)
                    cy.request({
                        method: 'PUT',
                        url: url.newsFeedPost,
                        body: formData,
                        headers: {
                            'Authorization': token.hrPersonnel,
                            'content-type': 'multipart/form-data'
                        },
                        failOnStatusCode: false,
                        timeout: 61000
                    })
                })
            })
    });
}