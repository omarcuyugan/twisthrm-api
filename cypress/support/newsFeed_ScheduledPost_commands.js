{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const addScheduledPost = require("../fixtures/requestBody/addScheduledPost.json")


    //Create Scheduled Post
    Cypress.Commands.add('createSchedPost',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBody,
            headers:{
                Authorization: token.hrPersonnel
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostInvalid',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBody,
            headers:{
                Authorization: token.invalidToken
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostMissing',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBody,
            headers:{

            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostEmpty',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBody,
            headers:{
                Authorization: "",
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostEmptyContent',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyEmptyContent,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });
    Cypress.Commands.add('createSchedPostMissingContent',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyMissingContent,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostEmptyDateField',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyEmptyDateField,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostMissingDateField',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyMissingDateField,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostInvalidDateFormat',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyInvalidDateFormat,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    
    Cypress.Commands.add('createSchedPostValidatePastDate',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodyPastDate,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });


    Cypress.Commands.add('createSchedPostValidateSameDate',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodySameDate,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostInvalidUrl',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostInvalidUrl,
            body: addScheduledPost.schedPostBodySameDate,
            headers:{
                Authorization: token.hrPersonnel,
            },
            failOnStatusCode: false,
        });
    });

    Cypress.Commands.add('createSchedPostEmployee',()=>{
        cy.request({
            method:"POST",
            url: url.createScheduledPostUrl,
            body: addScheduledPost.schedPostBodySameDate,
            headers:{
                Authorization: token.employeeDev,
            },
            failOnStatusCode: false,
        });
    });


}