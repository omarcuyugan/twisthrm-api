{
    describe('Update Event API as an HR personnel', () => {
        it('I should be able to update event upon passing valid token', () => {
            cy.updateEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Event")
                    expect(response.body).to.have.property("affectedRows", 1)
                })
        });


        it('I should not be able to update event upon passing invalid token', () => {
            cy.updatEventInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        });

        it('I should not be able to update projects upon passing empty token', () => {
            cy.updateEventEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });


        it('Verify the success message upon successful modification of event', () => {
            cy.updateEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully Updated Event")
                    expect(response.body).to.have.property("affectedRows", 1)
                })
        });

        it('Empty required field "eventTitle" must be validated', () => {
            cy.updateEventEmptyEventTitle()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Event Title cannot be empty")
                })
        });

        it('Empty required field "attendanceMode" must be validated', () => {
            cy.updateEventEmptyAttendanceMode()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You must choose a mode of attendance")
                })
        });

        it('Empty required field "startDate" must be validated', () => {
            cy.updateEventEmptyStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start date is required")
                })
        });

        it('Empty required field "endDate" must be validated', () => {
            cy.updateEventEmptyEndDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End date is required")
                })
        });

        it('Empty required field "startTime" must be validated', () => {
            cy.updateEventEmptyStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start time is required")
                })

        });

        it('Empty required field "endTime" must be validated', () => {
            cy.updateEventEmptyEndTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time is required")
                })

        });

        it('Invalid required field "eventTitle" must be validated', () => {
            cy.updateEventInvalidEventTitle()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Event Title format")
                })
        });


        it('Invalid required field "attendanceMode" must be validated', () => {
            cy.updateEventInvalidAttendanceMode()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Mode of attendance is invalid")

                })
        });

        it('Invalid required field "startDate" must be validated', () => {
            cy.updateEventInvalidStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Start Date format")

                })
        });

        it('Invalid required field "endDate" must be validated', () => {
            cy.updateEventInvalidEndDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid End Date format")

                })
        });

        it('Invalid required field "startTime" must be validated', () => {
            cy.updateEventInvalidStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start time format is invalid")

                })
        });

        it('Invalid required field "endTime" must be validated', () => {
            cy.updateEventInvalidEndTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time format is invalid")

                })
        });



        it('Validate endDate parameter must not be earlier than startDate', () => {
            cy.updateEventEndDateNotEarlierThanStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End date is an earlier date than start date")
                })
        })

        it('Validate endTime parameter must not be earlier than startTime', () => {
            cy.updateEventEndTimeNotEarlierThanStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time should be after the start time")
                })
        })


        it('"eventTitle" maximum character length must be validated', () => {
            cy.updateEventTitleMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Title must not exceed 100 characters")
                })
        })

        it('"meetingAddress" maximum character length must be validated', () => {
            cy.updateEventMeetingAddressMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Meeting address must not exceed 250 characters")

                })
        })


        it('"meetingLink" maximum character length must be validated', () => {
            cy.updateEventMeetingLinkMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Meeting link must not exceed 250 characters")

                })

        })


        it('"description" maximum character length must be validated', () => {
            cy.updateEventDescriptionMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Description must not exceed 250 characters")

                })
        })


        it('Invalid image file formats must be validated', ()=>{
            cy.updateEventInvalidImage()
            .then(response=>{
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString)
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(body).to.have.property("message","Invalid or unknown image file format.")
            })
        })

        it('Images larger than 3MB must be validated', ()=>{
            cy.updateEventImageMoreThan3MBFile()
            .then(response =>{
                const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                const body = JSON.parse(bodyString)
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(body).to.have.property("message","File size limit exceeded. Please select a file less than 3MB.")

            })
        })


        it('As an Employee I should not be able to update an event', ()=>{
            cy.updateEventEmployee()
            .then(response =>{
                expect(response.status).to.eq(401)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message","You don't have the right permission for this action.")
            })
        })

        it('Invalid eventID must be validated',()=>{
            cy.updateEventInvalidIdParams()
            .then(response =>{
                expect(response.status).to.eq(400)
                expect(response).to.have.property("body")
                expect(response.body).to.have.property("message","Invalid id parameter")
            })
        })

        it('Empty eventID must be validated',()=>{
            cy.updateEventEmptyIdParams()
            .then(response =>{
                expect(response.status).to.eq(404)
                expect(response).to.have.property("body")
                expect(response).to.have.property('body').that.contains('Cannot PUT /twisthrm/api/v1/event/update/');
            })
        })




    })

}