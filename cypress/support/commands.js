{
    const token = require("../fixtures/token/token.json")
    const url = require("../fixtures/testData/urlApi.json")
    const loginHrPersonnel = require("../fixtures/requestBody/loginHrPersonnel.json")
    const loginEmployee = require("../fixtures/requestBody/loginEmployee.json")
    const requestNoToken = require("../fixtures/requestBody/loginNoToken.json")

    // Bulk Upload
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
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.invalidToken,
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
                    'Authorization': "",
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
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmployeeId', () => {
        const fileName = 'testFiles/20230201.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderLastName', () => {
        const fileName = 'testFiles/20230202.csv'
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderFirstName', () => {
        const fileName = 'testFiles/20230203.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderBirthday', () => {
        const fileName = 'testFiles/20230204.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderDepartment', () => {
        const fileName = 'testFiles/20230205.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderPosition', () => {
        const fileName = 'testFiles/20230206.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmployeeStatus', () => {
        const fileName = 'testFiles/20230207.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderContact', () => {
        const fileName = 'testFiles/20230208.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('invalidHeaderEmail', () => {
        const fileName = 'testFiles/20230209.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmployeeId', () => {
        const fileName = 'testFiles/20230210.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingLastName', () => {
        const fileName = 'testFiles/20230211.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingFirstName', () => {
        const fileName = 'testFiles/20230212.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingBirthday', () => {
        const fileName = 'testFiles/20230213.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingDepartment', () => {
        const fileName = 'testFiles/20230214.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingPosition', () => {
        const fileName = 'testFiles/20230215.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmployeeStatus', () => {
        const fileName = 'testFiles/20230216.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingContact', () => {
        const fileName = 'testFiles/20230217.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('missingEmail', () => {
        const fileName = 'testFiles/20230218.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });

    Cypress.Commands.add('outdatedFileName', () => {
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
                    'Authorization': token.hrPersonnel,
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
                'Authorization': token.hrPersonnel,
                'content-type': 'multipart/form-data'
            },
            failOnStatusCode: false
        })
    });

    Cypress.Commands.add('employeeToken', () => {
        const fileName = 'testFiles/20230218.csv';
        cy.fixture(fileName, 'binary').then(file => {
            const blob = Cypress.Blob.binaryStringToBlob(file, 'file/csv');
            const formData = new FormData();
            formData.append("twistEmployees", blob, fileName);

            cy.request({
                method: 'POST',
                url: url.uploadUrl,
                body: formData,
                headers: {
                    'Authorization': token.employeeDev,
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
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.hrPersonnel,
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
                    'Authorization': token.hrPersonnel,
                    'content-type': 'multipart/form-data'
                },
                failOnStatusCode: false
            })
        })
    });
}