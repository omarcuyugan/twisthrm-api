{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")


    Cypress.Commands.add('deleteEvent', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEvent = event[0].id
            cy.log(firstEvent)
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl + firstEvent,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('deleteEventInvalidToken', () => {
       
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl+1,
                headers: {
                    'Authorization': token.invalidToken,
                },
                failOnStatusCode: false
            })
        });

    Cypress.Commands.add('deleteEventEmptyToken', () => {
       
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl+1,
                headers: {
                    'Authorization': "",
                },
                failOnStatusCode: false
            })
        });
    


    Cypress.Commands.add('deleteEventAlreadyDeleted', () => {
   
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl +1,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    
        Cypress.Commands.add('deleteEventNotExisting', () => {
   
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl +1,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });
    
        Cypress.Commands.add('deleteEventInvalidId', () => {
   
            cy.request({
                method: 'DELETE',
                url: url.deleteEventInvalidId ,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('deleteEventEmptyId', () => {
   
            cy.request({
                method: 'DELETE',
                url: url.deleteEventUrl ,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('deleteEventInvalidUrl', () => {
   
            cy.request({
                method: 'DELETE',
                url: url.deleteEventInvalidUrl ,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });



        Cypress.Commands.add('deleteEventMissingUrl', () => {
   
            cy.request({
                method: 'DELETE',
                url: "/twisthrm/api/v1/event/1" ,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        });

        Cypress.Commands.add('deleteEventEmployee', () => {
            cy.request({
                method: 'GET',
                url: url.getEventsUrl,
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            }).then(response => {
                let event = response.body.event
                let firstEvent = event[0].id
                cy.log(firstEvent)
                cy.request({
                    method: 'DELETE',
                    url: "/twisthrm/api/v1/event/delete/" + firstEvent,
                    headers: {
                        'Authorization': token.employeeDev,
                    },
                    failOnStatusCode: false
                })
            })
        });

}