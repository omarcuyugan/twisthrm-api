{

describe('Get all Events API as an HR Personnel', ()=>{
    it('I should be able to fetch all the added events',{ tags:['@smoke','@coreRegression']}, ()=>{
        cy.getAllEventsList()
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("event").to.have.property("length")
            })
    });

    it('Should not be able to fetch projects by passing invalid', () => {
        cy.getAllEventsInvalidToken()
        .then(response =>{
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Invalid token")
        })
    });

    it('Should not be able to fetch events by passing empty token', () => {
        cy.getAllEventsEmptyToken()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.include("ACCESS DENIED")
        })
    });

    it('Events should be sorted by "start_date" in descending order', ()=>{
        cy.eventsSortByStartDate()
    });
    
    it('"totalRecords" value in the response data must equal to the list of events', () =>{
        cy.getAllEventsList()
        .then(response=>{
            let count = Cypress.$(response.body.event).length
            cy.log(count)
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body.event).to.have.length(count)
            expect(response.body).to.have.property("totalRecords", count)
            expect(count).to.equal(response.body.event.length)
        })
    });

    it('Fetch event record must have the ff. detail in response : -id, -event_title, -event_address, -start_date, -end_date, -start_time, -end_time, -attendance_mode, -description, -meeting_link, -image, -is_deleted',() =>{
        cy.getAllEventsList()
        .then(response=> {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body.event[0]).to.have.property("id")
            expect(response.body.event[0]).to.have.property("event_title")
            expect(response.body.event[0]).to.have.property("event_address")
            expect(response.body.event[0]).to.have.property("start_date")
            expect(response.body.event[0]).to.have.property("end_date")
            expect(response.body.event[0]).to.have.property("start_time")
            expect(response.body.event[0]).to.have.property("end_time")
            expect(response.body.event[0]).to.have.property("attendance_mode")
            expect(response.body.event[0]).to.have.property("description")
            expect(response.body.event[0]).to.have.property("meeting_link")
            expect(response.body.event[0]).to.have.property("image")
            expect(response.body.event[0]).to.have.property("is_deleted")
        })        
    });

    it('"start_date" and "end_date" should be in correct date format -YYYY -MM -DD',()=>{
        cy.getAllEventsList()
        .then(response =>{
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body.event[0].start_date).to.match(/\d{4}-\d{2}-\d{2}/)
            expect(response.body.event[0].end_date).to.match(/\d{4}-\d{2}-\d{2}/)
        })
        

    });

    it('"start_time" and "end_time" should be in correct format -HH:MM XM',()=>{
        cy.getAllEventsList()
        .then(response=>{
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body.event[0].start_time).to.match( /^\d{1,2}:\d{2}\s[APM]{2}$/)
            expect(response.body.event[0].end_time).to.match ( /^\d{1,2}:\d{2}\s[APM]{2}$/)

        })
    });


    it('Invalid url request path must be validated',()=>{
        cy.getInvalidEventParams()
        .then(response =>{
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot GET /twisthrm/api/v1/events")
            
        })

    });

    it('Missing URL request path must be validated',()=>{
        cy.getMissingEventParams()
        .then(response =>{
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
        })
    });

    it('I should be able to search a event by passing valid token',()=>{
        cy.searchEvent()
        .then(async (response)=>{
            let count = Cypress.$(response.body.event).length
            cy.log(count)
            for(let x= 0; x<count;x++){
                const eventName = response.body.event[x].event_title
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(eventName).to.contains("Town Hall",)
            }
        })
    });

    it('I should not be able to search a event by passing invalid token',()=>{
        cy.searchEventInvalid()
        .then(response=>{
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","Invalid token")
        })
    });


    it('I should not be able to search a project by passing empty token',()=>{
        cy.searchEventNoToken()
        .then(response =>{
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
            expect(response.body).to.include("ACCESS DENIED")
        })
    });


    it('Search event record must have the following details in the response: -id, -event_title, -event_address, -start_date, -end_date, -start_time, -end_time, -attendance_mode, -description, -meeting_link, -image, -is_deleted',()=>{
        cy.searchEvent()
        .then(async(response)=>{
            let count = Cypress.$(response.body.event).length
            cy.log(count)
            for(let x=0; x<count;x++){
                const eventName = response.body.event[x].event_title
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(response.body.event[x]).to.have.property("id")
                expect(response.body.event[x]).to.have.property("event_title")
                expect(response.body.event[x]).to.have.property("event_address")
                expect(response.body.event[x]).to.have.property("start_date")
                expect(response.body.event[x]).to.have.property("end_date")
                expect(response.body.event[x]).to.have.property("start_time")
                expect(response.body.event[x]).to.have.property("end_time")
                expect(response.body.event[x]).to.have.property("attendance_mode")
                expect(response.body.event[x]).to.have.property("description")
                expect(response.body.event[x]).to.have.property("meeting_link")
                expect(response.body.event[x]).to.have.property("image")
                expect(response.body.event[x]).to.have.property("is_deleted")
                expect(eventName).to.contains("Town Hall")
            }
        })
    });

    it('Search result must be related to the search keyword',() =>{
        cy.searchEvent()
        .then(async (response)=>{
            let count = Cypress.$(response.body.project).length
            cy.log(count)
            for(let x=0; x<count; x++){
                const eventName = response.body.event[x].event_title
                expect(response.status).to.eq(200)
                expect(response).to.have.property("body")
                expect(eventName).to.contains("Town Hall",)
            }
        })
    });

    it('Search result list must be equal to the "totalRecords" parameter',()=>{
        cy.searchEvent()
        .then(async (response)=>{
            let count = Cypress.$(response.body.event).length
            cy.log(count)
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body.event).to.have.length(count)
            expect(response.body).to.have.property("totalRecords",count)
            expect(count).to.equal(response.body.event.length)
        })
    });

    it('Invalid URL request parameters "page" must be validated', ()=>{
        cy.searchEventInvalidPage()
        .then(response=>{
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message", "Invalid page parameter")
        })
    });

    it('Invalid URL request parameters "pageSize" must be validate', ()=>{
        cy.searchEventInvalidPageSize()
        .then(response=>{
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","Invalid pageSize parameter")
        })
    });


    it('Invalid URL request path url must be validated',()=>{
        cy.searchEventInvalidUrl()
        .then(response =>{
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot GET /twisthrm/api/v1/events")

        })
    });

    it('Missing URL request path must be validate',()=>{
        cy.searchEventMissingUrl()
        .then(response=>{
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
            expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
        })
    });


    it('A message "No data found" is in the response when there are no related searches', ()=>{
        cy.searchEventNoDataFound()
        .then(response =>{
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","No data found.")
        })

    });




});




}