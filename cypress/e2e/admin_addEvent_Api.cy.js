{
    describe('Add Event API as an HR Personnel', () => {
        it('I should be able to add a face to face event by passing a valid token', () => {
            cy.addF2fEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("affectedRows")
                })
        })


        it('I should not be able to add a event by passing invalid token', () => {
            cy.addEventInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid token")
                })
        })

        it('I should not be able to add a event upon passing empty token', () => {
            cy.addEventEmptyToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("ACCESS DENIED")
                })
        });



        it('I should be able to add a online event upon passing valid token', () => {
            cy.addOnlineEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('Adding an event the response must contain the following -message, -id, -affectedRows', () => {
            cy.addOnlineEvent()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Successfully saved!")
                    expect(response.body).to.have.property("id")
                    expect(response.body).to.have.property("affectedRows")
                })
        });

        it('Empty required field "eventTitle" must be validated', () => {
            cy.addEventEmptyEventTitle()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Event Title cannot be empty")
                })
        });

        it('Empty required field "attendanceMode" must be validated', () => {
            cy.addEventEmptyAttendanceMode()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You must choose a mode of attendance")
                })
        });

        it('Empty required field "startDate" must be validated', () => {
            cy.addEventEmptyStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start date is required")
                })
        });

        it('Empty required field "endDate" must be validated', () => {
            cy.addEventEmptyEndDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End date is required")
                })
        });

        it('Empty required field "startTime" must be validated', () => {
            cy.addEventEmptyStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start time is required")
                })

        });

        it('Empty required field "endTime" must be validated', () => {
            cy.addEventEmptyEndTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time is required")
                })

        });

        it('Invalid required field "eventTitle" must be validated', () => {
            cy.addEventInvalidEventTitle()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Event Title format")
                })
        });


        it('Invalid required field "attendanceMode" must be validated', () => {
            cy.addEventInvalidAttendanceMode()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Mode of attendance is invalid")

                })
        });

        it('Invalid required field "startDate" must be validated', () => {
            cy.addEventInvalidStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid Start Date format")

                })
        });

        it('Invalid required field "endDate" must be validated', () => {
            cy.addEventInvalidEndDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Invalid End Date format")

                })
        });

        it('Invalid required field "startTime" must be validated', () => {
            cy.addEventInvalidStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Start time format is invalid")

                })
        });

        it('Invalid required field "endTime" must be validated', () => {
            cy.addEventInvalidEndTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time format is invalid")

                })
        });



        it('Validate endDate parameter must not be earlier than startDate', () => {
            cy.addEventEndDateNotEarlierThanStartDate()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End date is an earlier date than start date")
                })
        })


        it('Validate endTime parameter must not be earlier than startTime', () => {
            cy.addEventEndTimeNotEarlierThanStartTime()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "End time should be after the start time")
                })
        })


        it('"eventTitle" maximum character length must be validated', () => {
            cy.addEventTitleMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Title must not exceed 100 characters")
                })
        })

        it('"meetingAddress" maximum character length must be validated', () => {
            cy.addEventMeetingAddressMaxChar()
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
            cy.addEventDescriptionMaxChar()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Description must not exceed 250 characters")

                })
        })


        it('Invalid image file formats must be validated', () => {
            cy.addEventInvalidImage()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "Invalid or unknown image file format.")
                })
        })

        it('Images larger than 3MB must be validated', () => {
            cy.addEventImageMoreThan3MBFile()
                .then(response => {
                    const bodyString = Cypress.Blob.arrayBufferToBinaryString(response.body);
                    const body = JSON.parse(bodyString)
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(body).to.have.property("message", "File size limit exceeded. Please select a file less than 3MB.")

                })
        })

        it('As an Employee I should not be able to create a face to face event', () => {
            cy.addEventEmployee()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "You don't have the right permission for this action.")
                })
        })


    })


}