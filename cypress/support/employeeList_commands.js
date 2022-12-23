{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getEmployeePIM', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeePIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeInvalidTokenPIM', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeePIM,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeNoTokenPIM', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeePIM,
            headers: {
                'auth-token': ""
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeInvalidUrlPIM', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeInvalidUrlPIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmployeeInvalidPagePIM', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployeeInvalidPagePIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getDeactivatedPIM', () => {
        cy.request({
            method: 'GET',
            url: url.getDeactivated,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidIsdel', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidIsdel,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidSort', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidSort,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidPage', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmptyIsdel', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyIsdel,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmptySort', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptySort,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getEmptyPage', () => {
        cy.request({
            method: 'GET',
            url: url.getEmptyPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sortLastNameAZ', () => {
        let listingCount = "";
        let GenSampleAZ = [];
        let GenSampleToSort = [];
        cy.getEmployeePIM().then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleAZ.push(response.body.employees[x].LastName)
            }
            GenSampleToSort = GenSampleAZ.sort();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleAZ.toString()).to.be.equal(GenSampleToSort.toString());
        });
    });

    Cypress.Commands.add('sortLastNameZA', () => {
        let listingCount = "";
        let GenSampleZA = [];
        let GenSampleResponse = [];
        let GenSampleToReverse = [];
        cy.request({
            method: 'GET',
            url: url.sortLastNameDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleZA.push(response.body.employees[x].LastName)
                cy.log(response.body.employees[x].LastName)
            }
            GenSampleResponse = GenSampleZA.sort();
            GenSampleToReverse = GenSampleResponse.reverse();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleZA.toString()).to.be.equal(GenSampleToReverse.toString());
        });
    });

    Cypress.Commands.add('sortRoleAZ', () => {
        let listingCount = "";
        let GenSampleAZ = [];
        let GenSampleToSort = [];
        cy.request({
            method: 'GET',
            url: url.sortRoleAsc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleAZ.push(response.body.employees[x].CurrentPosition)
            }
            GenSampleToSort = GenSampleAZ.sort();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleAZ.toString()).to.be.equal(GenSampleToSort.toString());
        });
    });

    Cypress.Commands.add('sortRoleZA', () => {
        let listingCount = "";
        let GenSampleZA = [];
        let GenSampleResponse = [];
        let GenSampleToReverse = [];
        cy.request({
            method: 'GET',
            url: url.sortRoleDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleZA.push(response.body.employees[x].CurrentPosition)
            }
            GenSampleResponse = GenSampleZA.sort();
            GenSampleToReverse = GenSampleResponse.reverse();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleZA.toString()).to.be.equal(GenSampleToReverse.toString());
        });
    });

    
    Cypress.Commands.add('sortEmailAZ', () => {
        let listingCount = "";
        let GenSampleAZ = [];
        let GenSampleToSort = [];
        cy.request({
            method: 'GET',
            url: url.sortEmailAsc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleAZ.push(response.body.employees[x].TREmail)
            }
            GenSampleToSort = GenSampleAZ.sort();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleAZ.toString()).to.be.equal(GenSampleToSort.toString());
        });
    });

    Cypress.Commands.add('sortEmailZA', () => {
        let listingCount = "";
        let GenSampleZA = [];
        let GenSampleResponse = [];
        let GenSampleToReverse = [];
        cy.request({
            method: 'GET',
            url: url.sortEmailDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
        .then(async (response) => {
            listingCount = Cypress.$(response.body.employees).length;
            for (let x = 0; x < listingCount; x++) {
                GenSampleZA.push(response.body.employees[x].TREmail)
            }
            GenSampleResponse = GenSampleZA.sort();
            GenSampleToReverse = GenSampleResponse.reverse();
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("employees")
            expect(GenSampleZA.toString()).to.be.equal(GenSampleToReverse.toString());
        });
    });
}