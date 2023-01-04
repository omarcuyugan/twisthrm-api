{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getSpecificEmployee2', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployee2,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalid,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeEmpty', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeEmpty,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeInvalidUrl2', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalidUrl2,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getSpecificEmployeeAsEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployee,
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateEmployeeAsEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployee,
            body:{
                "FirstName": "Earll Anthony",
                "LastName": "FERNANDEZZ",
                "Nickname": "Tonton"
            },
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateEmployeeAsHrPersonnel', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployee2,
            body: {
                "FirstName": "Daniel McCoyy",
                "LastName": "MOLLINA",
                "Nickname": "McCoy Test"
            },
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateWithInvalidObject', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployee2,
            body: {
                "FirstNa": "Daniel McCoyy",
                "LastName": "MOLLINA",
                "Nickname": "McCoy Test"
            },
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('updateOtherEmployeeAsEmployee', () => {
        cy.request({
            method: 'PUT',
            url: url.getSpecificEmployee2,
            body: {
                "FirstName": "Daniel McCoyy",
                "LastName": "MOLLINA",
                "Nickname": "McCoy Test"
            },
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
}