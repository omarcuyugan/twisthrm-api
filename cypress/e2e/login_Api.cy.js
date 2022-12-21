{
    describe('Login As an Employee, API', () => {
        it('I should be able to login by passing a valid authorization token', () => {
            cy.loginAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.be.a("string")
                })
        })

        it('I should not be able to login by passing an invalid authorization token', () => {
            cy.loginInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(504)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("504 Gateway Time-out")
                })
        })

        it('I should not be able to login without passing an authorization token', () => {
            cy.loginNoToken()
                .then(response => {
                    expect(response.status).to.eq(504)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("504 Gateway Time-out")
                })
        })

        it('I should not be able to login using an invalid url path', () => {
            cy.loginInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/users/login")
                })
        })
    });

    describe('Login As an HR Personnel, API', () => {
        it('I should be able to login by passing a valid authorization token', () => {
            cy.loginAsHrPersonnel()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.be.a("string")
                })
        })

        it('I should not be able to login by passing an invalid authorization token', () => {
            cy.loginInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(504)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("504 Gateway Time-out")
                })
        })

        it('I should not be able to login without passing an authorization token', () => {
            cy.loginNoToken()
                .then(response => {
                    expect(response.status).to.eq(504)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("504 Gateway Time-out")
                })
        })

        it('I should not be able to login using an invalid url path', () => {
            cy.loginInvalidUrl()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot POST /twisthrm/api/v1/users/login")
                })
        })
    })
}