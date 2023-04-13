{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")

    Cypress.Commands.add('getAllEventsList', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,

            },
            failOnStatusCode: false,

        })


    });

    Cypress.Commands.add('getAllEventsInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.invalidToken,

            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getAllEventsEmptyToken', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': ""

            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('eventsSortByStartDate', () => {
        let listingCount = "";
        let eventDates = [];
        let dateToSort = [];
        cy.getAllEventsList().then(async (response) => {
            listingCount = Cypress.$(response.body.event).length;

            for (let x = 0; x < listingCount; x++) {
                eventDates.push(response.body.event[x].start_date)
            }

            dateToSort = eventDates.sort((dateA, dateB) => dateB.date - dateA.date)
            expect(eventDates.toString()).to.be.equal(dateToSort.toString());
        });
    });

    Cypress.Commands.add('getInvalidEventParams', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('getMissingEventParams', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsMissingUrl,
            healders: {
                'Authorization': token.hrPersonnel,

            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('searchEvent', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('searchEventInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventUrl,
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEventNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventUrl,
            headers: {
                'Authorization': "",

            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEventInvalidPage', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventInvalidPage,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEventInvalidPageSize', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventInvalidPageSize,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEventInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventInvalidUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('searchEventMissingUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchEventMissingUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEventNoDataFound', () => {
        cy.request({
            method: 'GET',
            url: url.noEventFound,
            headers: {
                'Authorization': token.hrPersonnel,

            },
            failOnStatusCode: false
        })
    })

}