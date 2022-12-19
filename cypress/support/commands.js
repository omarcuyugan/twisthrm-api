{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const loginHrPersonnel = require("../fixtures/requestBody/loginHrPersonnel.json")
    const requestInvalid = require("../fixtures/requestBody/loginInvalid.json")
    const requestNoToken = require("../fixtures/requestBody/loginNoToken.json")

    //Our People Feature
    Cypress.Commands.add('getAllEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidId', () => {
        cy.request({
            method: 'GET',
            url: url.invalidIdurl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getValidId', () => {
        cy.request({
            method: 'GET',
            url: url.ValidIdurl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getInvalidUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('missingParameters', () => {
        cy.request({
            method: 'GET',
            url: url.getEmployee,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidParameters', () => {
        cy.request({
            method: 'GET',
            url: url.invalidParametersUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sortTeam', () => {
        cy.request({
            method: 'GET',
            url: url.sortTeamDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });


    Cypress.Commands.add('sortPosition', () => {
        cy.request({
            method: 'GET',
            url: url.sortPositionDesc,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getInvalidToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('getNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.getOurPeople,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });
    //Login Feature

    Cypress.Commands.add('loginAsEmployee', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            form: true,
            body: {
                "token": token.employeeDev
            },
            failOnStatusCode: false
        });
    })

    Cypress.Commands.add('loginInvalidToken', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: requestInvalid,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('loginNoToken', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: requestNoToken,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('loginInvalidUrl', () => {
        cy.request({
            method: 'POST',
            url: url.invalidLoginUrl,
            body: loginHrPersonnel,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('loginAsHrPersonnel', () => {
        cy.request({
            method: 'POST',
            url: url.loginUrl,
            body: loginHrPersonnel,
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('uploadWithValidToken', () => {
        const fileName = 'testFiles/20230301.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);
            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
            })
        })
    });

    Cypress.Commands.add('invalidToken', () => {
        const fileName = 'testFiles/20230301.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.invalidToken,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('withoutToken', () => {
        const fileName = 'testFiles/20230301.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': "",
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('uploadNonCsv', () => {
        const fileName = 'testFiles/20230201.png';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidUrl', () => {
        const fileName = 'testFiles/20230301.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.invalidUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmployeeId', () => {
        const fileName = 'testFiles/20230101.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderLastName', () => {
        const fileName = 'testFiles/20230102.csv'
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderFirstName', () => {
        const fileName = 'testFiles/20230103.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderBirthday', () => {
        const fileName = 'testFiles/20230104.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderDepartment', () => {
        const fileName = 'testFiles/20230105.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderPosition', () => {
        const fileName = 'testFiles/20230106.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmployeeStatus', () => {
        const fileName = 'testFiles/20230107.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderContact', () => {
        const fileName = 'testFiles/20230108.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmail', () => {
        const fileName = 'testFiles/20230109.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmployeeId', () => {
        const fileName = 'testFiles/20230110.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingLastName', () => {
        const fileName = 'testFiles/20230111.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingFirstName', () => {
        const fileName = 'testFiles/20230112.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingBirthday', () => {
        const fileName = 'testFiles/20230113.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingDepartment', () => {
        const fileName = 'testFiles/20230114.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingPosition', () => {
        const fileName = 'testFiles/20230115.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmployeeStatus', () => {
        const fileName = 'testFiles/20230116.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingContact', () => {
        const fileName = 'testFiles/20230117.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmail', () => {
        const fileName = 'testFiles/20230118.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('emptyCsv', () => {
        const fileName = 'testFiles/20230302.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('outdatedFileName', () => {
        const fileName = 'testFiles/20221207.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('noFile', () => {
        cy.request({
            method: 'POST',
            url: url.uploadUrl,
            headers: {
                'auth-token': token.hrPersonnel,
                'content-type': 'multipart/form-data'
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('employeeToken', () => {
        const fileName = 'testFiles/20230118.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.employeeDev,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('resignedStatus', () => {
        const fileName = 'testFiles/20230303.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('terminatedStatus', () => {
        const fileName = 'testFiles/20230304.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('ojtEndedStatus', () => {
        const fileName = 'testFiles/20230305.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('endOfContractStatus', () => {
        const fileName = 'testFiles/20230306.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'auth-token': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });
    //Search Our People Page
    Cypress.Commands.add('searchHrPersonnel', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeInvalid', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'auth-token': token.invalidToken,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployeeNoToken', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'auth-token': "",
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.searchInvalidUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('searchEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.searchOurPeople,
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('sqlInjection', () => {
        cy.request({
            method: 'GET',
            url: url.sqlInjectionUrl,
            headers: {
                'auth-token': token.employeeDev,
            },
            failOnStatusCode: false
        })
    });
    //Pagination
    Cypress.Commands.add('pagePim', () => {
        cy.request({
            method: 'GET',
            url: url.page2PIM,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidUrlPIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPimUrl,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('pageSize', () => {
        cy.request({
            method: 'GET',
            url: url.pageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPagePIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('invalidPageSizePIM', () => {
        cy.request({
            method: 'GET',
            url: url.invalidPageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPagePIM', () => {
        cy.request({
            method: 'GET',
            url: url.emptyPage,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('emptyPageSizePIM', () => {
        cy.request({
            method: 'GET',
            url: url.emptyPageSize,
            headers: {
                'auth-token': token.hrPersonnel,
            },
            failOnStatusCode: false
        })
    });
    //Our People User Profile Display
    Cypress.Commands.add('getSpecificEmployee', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployee,
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

    Cypress.Commands.add('getSpecificEmployeeInvalidUrl', () => {
        cy.request({
            method: 'GET',
            url: url.getSpecificEmployeeInvalidUrl,
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
}