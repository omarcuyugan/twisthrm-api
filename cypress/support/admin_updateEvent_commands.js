{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")


    Cypress.Commands.add('updateEvent', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updatEventInvalidToken', () => {
        cy.request({
            method: 'PUT',
            url: url.updateEventUrl + "1",
            body: {
                "eventTitle": "Town Hall",
                "attendanceMode": "Face-to-face",
                "meetingAddress": "test",
                "description": "hello",
                "startDate": "04/27/2023",
                "endDate": "07/07/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"

            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false

        })
    });


    Cypress.Commands.add('updateEventEmptyToken', () => {
        cy.request({
            method: 'PUT',
            url: url.updateEventUrl + "1",
            body: {
                "eventTitle": "Town Hall",
                "attendanceMode": "Face-to-face",
                "meetingAddress": "test",
                "description": "hello",
                "startDate": "04/27/2023",
                "endDate": "07/07/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"
            },
            headers: {
                'Authorization': " ",
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('updateEventEmptyEventTitle', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventEmptyAttendanceMode', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventEmptyStartDate', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventEmptyEndDate', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventEmptyStartTime', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventEmptyEndTime', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": ""

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventInvalidEventTitle', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "(test)",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventInvalidAttendanceMode', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "(Face-to-face)",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventInvalidStartDate', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "(Face-to-face)",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "January 1, 2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventInvalidEndDate', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "(Face-to-face)",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "January 3, 2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventInvalidStartTime', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "(Face-to-face)",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "(9:00 AM)",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventInvalidEndTime', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "(Face-to-face)",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "(5:00 PM)"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });



    Cypress.Commands.add('updateEventEndDateNotEarlierThanStartDate', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "07/07/2023",
                    "endDate": "04/27/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventEndTimeNotEarlierThanStartTime', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 AM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventTitleMaxChar', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labored L",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 AM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('updateEventMeetingAddressMaxChar', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "Town Hall",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat test lorem ipsum test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventMeetingLinkMaxChar', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "test",
                    "attendanceMode": "Face-to-face,Online",
                    "meetingLink": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat test lorem ipsum test",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });





    Cypress.Commands.add('updateEventDescriptionMaxChar', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + firstEventID,
                body: {
                    "eventTitle": "test",
                    "attendanceMode": "Face-to-face",
                    "meetingLink": "test",
                    "meetingAddress": "test",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat test lorem ipsum test",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.hrPersonnel,
                },
                failOnStatusCode: false
            })
        })
    });



    Cypress.Commands.add('updateEventInvalidImage', () => {
        const fileName = 'testFiles/20231218.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("file", blob, fileName);
            formData.append("eventTitle", "Update Event with Image API");
            formData.append("startDate", "04/27/2023");
            formData.append("endDate", "07/07/2023");
            formData.append("startTime", "8:00 AM");
            formData.append("endTime", "5:00 PM");
            formData.append("attendanceMode", "Face-to-face");
            formData.append("meetingAddress", "test");
            formData.append("description", "test");

            cy.request({

                method: 'PUT',
                url: url.updateEventUrl + 1,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,

                },
                failOnStatusCode: false
            })

        })

    });



    Cypress.Commands.add('updateEventImageMoreThan3MBFile', () => {
        const fileName = 'testFiles/15mb.jpg';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("file", blob, fileName);
            formData.append("eventTitle", "Update Event with Image API");
            formData.append("startDate", "04/27/2023");
            formData.append("endDate", "07/07/2023");
            formData.append("startTime", "8:00 AM");
            formData.append("endTime", "5:00 PM");
            formData.append("attendanceMode", "Face-to-face");
            formData.append("meetingAddress", "test");
            formData.append("description", "test");

            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + 1,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,

                },
                failOnStatusCode: false
            })

        })

    });



    Cypress.Commands.add('updateEventEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        }).then(response => {
            let event = response.body.event
            let firstEventID = event[0].id
            cy.log(firstEventID)
            cy.request({
                method: 'PUT',
                url: url.updateEventUrl + 1,
                body: {
                    "eventTitle": "test",
                    "attendanceMode": "Face-to-face",
                    "meetingAddress": "test",
                    "description": "hello",
                    "startDate": "04/27/2023",
                    "endDate": "07/07/2023",
                    "startTime": "9:00 AM",
                    "endTime": "5:00 PM"

                },
                headers: {
                    'Authorization': token.employeeDev,
                },
                failOnStatusCode: false
            })
        })
    });


    Cypress.Commands.add('updateEventInvalidIdParams', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
        cy.request({
            method: 'PUT',
            url: url.updateEventUrl + "tester",
            body: {
                "eventTitle": "test",
                "attendanceMode": "Face-to-face",
                "meetingAddress": "test",
                "description": "hello",
                "startDate": "04/27/2023",
                "endDate": "07/07/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"

            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })

    });


    Cypress.Commands.add('updateEventEmptyIdParams', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        })
        cy.request({
            method: 'PUT',
            url: url.updateEventUrl,
            body: {
                "eventTitle": "test",
                "attendanceMode": "Face-to-face",
                "meetingAddress": "test",
                "description": "hello",
                "startDate": "04/27/2023",
                "endDate": "07/07/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"

            },
            headers: {
                'Authorization': token.hrPersonnel,
            },
            failOnStatusCode: false
        })

    });



}