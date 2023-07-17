{


describe('Delete Project API as an HR Personnel', ()=>{
        
    it('I should be able to delete an event upon passing valid token',{ tags: ['@smoke','@coreRegression']}, () => {
        cy.deleteEvent()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Successfully deleted Event")
        })
    });

    it('I should not be able to delete an event upon passing invalid token', () => {
        cy.deleteEventInvalidToken()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Invalid token")
        })
    });

    it('I should not be able to delete a project upon passing empty token', () => {
        cy.deleteEventEmptyToken()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.include("ACCESS DENIED")
        })
    });

    it('Validate successful deletion of event', () => {
        cy.deleteEventAlreadyDeleted()
        .then(response => {
            expect(response.status).to.eq(500)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Event doesn't exist.")
        })
    });

    it('Validate deletion of non existing eventID', () => {
        cy.deleteEventNotExisting()
        .then(response => {
            expect(response.status).to.eq(500)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Event doesn't exist.")
        })
    });

    it('Validate invalid eventID delete parameters', () => {
        cy.deleteEventInvalidId()
        .then(response => {
            expect(response.status).to.eq(500)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Invalid id parameter")
        })
    });

    it('Validate empty eventID delete parameters', () => {
        cy.deleteEventEmptyId()
        .then(response => {
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/event/delete/")
        })
    });

    it('Validate Invalid URL request Path', () => {
        cy.deleteEventInvalidUrl()
        .then(response => {
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/event/deletesss/1")
        })
    });

    it('Validate Missing URL request Path', () => {
        cy.deleteEventMissingUrl()
        .then(response => {
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot DELETE /twisthrm/api/v1/event/1")
        })
    });



    it('Verify the success message upon successful deletion of event', () => {
        cy.deleteEvent()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.property("message","Successfully deleted Event")
        })
    });


    it('As an employee I should no be able to delete a event', () => {
        cy.deleteEventEmployee()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.property("message","You don't have the right permission for this action.")
        })
    });








})

}