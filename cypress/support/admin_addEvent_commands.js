{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")



    Cypress.Commands.add('addF2fEvent', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newEvent = "AddEvent" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addEventUrl,
            body: {

                "eventTitle": "Face-to-face Event",
                "attendanceMode": "Face-to-face",
                "meetingLink": "test",
                "meetingAddress": "test",
                "description": "Contrary",
                "startDate": "03/16/2023",
                "endDate": "03/16/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"
            },
            headers: {
                'Authorization': token.hrPersonnel
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('addEventInvalidToken', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newEvent = "AddEvent" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addEventUrl,
            body: {

                "eventTitle": "Face-to-face Event",
                "attendanceMode": "Face-to-face",
                "meetingLink": "test",
                "meetingAddress": "test",
                "description": "Contrary",
                "startDate": "03/16/2023",
                "endDate": "03/16/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"
            },
            headers: {
                'Authorization': token.invalidToken,
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('addEventEmptyToken', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newEvent = "AddEvent" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addEventUrl,
            body: {

                "eventTitle": "Face-to-face Event",
                "attendanceMode": "Face-to-face",
                "meetingLink": "test",
                "meetingAddress": "test",
                "description": "Contrary",
                "startDate": "03/16/2023",
                "endDate": "03/16/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"
            },
            headers: {
                'Authorization': "",
            },
            failOnStatusCode: false

        })
    });

    Cypress.Commands.add('addOnlineEvent', () => {
        const randomNum = Math.floor(Math.random() * 100);
        let newEvent = "AddEvent" + randomNum;
        cy.request({
            method: 'POST',
            url: url.addEventUrl,
            body: {

                "eventTitle": "Online Event",
                "attendanceMode": "Online",
                "meetingLink": "test",
                "meetingAddress": "test",
                "description": "Contrary",
                "startDate": "04/27/2023",
                "endDate": "07/07/2023",
                "startTime": "9:00 AM",
                "endTime": "5:00 PM"
            },
            headers: {
                'Authorization': token.hrPersonnel
            },
            failOnStatusCode: false

        })
    });


    Cypress.Commands.add('addEventEmptyEventTitle', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventEmptyAttendanceMode', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventEmptyStartDate', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventEmptyEndDate', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventEmptyStartTime', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventEmptyEndTime', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventInvalidEventTitle', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventInvalidAttendanceMode', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventInvalidStartDate', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventInvalidEndDate', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventInvalidStartTime', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventInvalidEndTime', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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



    Cypress.Commands.add('addEventEndDateNotEarlierThanStartDate', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventEndTimeNotEarlierThanStartTime', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventTitleMaxChar', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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

    Cypress.Commands.add('addEventMeetingAddressMaxChar', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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


    Cypress.Commands.add('addEventMeetingLinkMaxChar', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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





    Cypress.Commands.add('addEventDescriptionMaxChar', () => {
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
                method: 'POST',
                url: url.addEventUrl,
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



    Cypress.Commands.add('addEventInvalidImage', () => {
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

                method: 'POST',
                url: url.addEventUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,

                },
                failOnStatusCode: false
            })

        })

    });



    Cypress.Commands.add('addEventImageMoreThan3MBFile', () => {
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
                method: 'POST',
                url: url.addEventUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,

                },
                failOnStatusCode: false
            })

        })

    });



    Cypress.Commands.add('addEventEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getEventsUrl,
            headers: {
                'Authorization': token.employeeDev,
            },
            failOnStatusCode: false
        }).then(response => {

            cy.request({
                method: 'POST',
                url: url.addEventUrl,
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

}