{describe('Our People Page API', () => {
    it('Get Request should be able to get all employee list', () => {
        cy.getAllEmployee()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('The employee list should be alphabetically ordered by default', () => {
        cy.getAllEmployee()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('Employee list should be sorted to ascending by Last Name', () => {
        cy.getAllEmployee()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('Employee list should be sorted to descending by Last Name', () => {
        cy.getAllEmployee()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    // it('Should be able to fetch user details by passing valid Employee ID parameter', () => {
    //     cy.getValidId()
    //     .then(response => {
    //         expect(response.status).to.eq(200)
    //         expect(response).to.have.property("body")
    //     })
    // })
    it('Invalid IDs must be validated', () => {
        cy.getInvalidId()
        .then(response => {
            expect(response.status).to.eq(400)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","Error getting employee with employee number: 31312. Employee doesn't exist.")
        })
    })
    it('Missing/Empty ID parameters must be validated', () => {
        cy.missingParameters()
        .then(response => {
            expect(response.status).to.eq(500)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","There was an error when getting all employees")
        })
    })
    it('Invalid parameters must be validated', () => {
        cy.invalidParameters()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","No data found.")
        })
    })
    it('Empty parameters must be validated', () => {
        cy.missingParameters()
        .then(response => {
            expect(response.status).to.eq(500)
            expect(response).to.have.property("body")
            expect(response.body).to.have.property("message","There was an error when getting all employees")
        })
    })
    it('Invalid URL request path structure must be validated', () => {
        cy.getInvalidUrl()
        .then(response => {
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
        })
    })
    it('Missing URL request path structure must be validated', () => {
        cy.getInvalidUrl()
        .then(response => {
            expect(response.status).to.eq(404)
            expect(response).to.have.property("body")
        })
    })
    it('Should be able to sort the "Team" to descending order', () => {
        cy.sortTeam()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('Should be able to sort the "Position" from ascending to descending order', () => {
        cy.sortPosition()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('Total records should be equal to the count length of response', () => {
        cy.getAllEmployee()
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
        })
    })
    it('Invalid Token should be validated', () => {
        cy.getInvalidToken()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
        })
    })
    it('Empty/Missing Token should be validated', () => {
        cy.getNoToken()
        .then(response => {
            expect(response.status).to.eq(401)
            expect(response).to.have.property("body")
        })
    })
})
}