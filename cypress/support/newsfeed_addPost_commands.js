{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const addPost = require("../fixtures/requestBody/addPost.json")

    Cypress.Commands.add('postText', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.postText,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postTextAnnouncement', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.postAnnouncement,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postTextBirthday', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.postBirthday,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postTextEvent', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.postEvent,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postInvalidToken', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.postEvent,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyContentAndFile', () => {
        cy.request({
            method: 'POST',
            url: url.postNewsfeedUrl,
            body: addPost.emptyText,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('newsfeedInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.newsfeedInvalidUrl,
            body: addPost.postEvent,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('postWithImage', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "standard");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageInvalidToken', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "standard");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.invalidToken,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageStandard', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageAnnouncement', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "announcement");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageBirthday', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "birthday");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageEvent', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "Automation Post with Image");
            formData.append("type", "event");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageEmptyContent', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "");
            formData.append("type", "event");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageEmptyContent', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "");
            formData.append("type", "event");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageInvalidURL', () => {
        const fileName = 'testFiles/Image.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "");
            formData.append("type", "event");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.newsfeedInvalidUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('postWithImageInvalidFile', () => {
        const fileName = 'testFiles/20230101.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("content", "");
            formData.append("type", "event");
            formData.append("file", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.postNewsfeedUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });
}