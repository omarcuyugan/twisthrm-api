{
    describe('Login As an Employee, API', () => {
        it('I should be able to login by passing a valid authorization token', { tags: ['@smoke','@coreRegression']}, () => {
            cy.loginAsEmployee()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("accessToken")
                    expect(response.body).to.have.property("refreshToken")
                })
        })

        it('I should not be able to login by passing an invalid authorization token',{ tags: '@coreRegression' },  () => {
            cy.loginInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Unauthorized")      
                })
        })

        it('I should not be able to login without passing an authorization token', () => {
            cy.loginNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Unauthorized")
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
        it('I should be able to login by passing a valid authorization token',{ tags: ['@smoke','@coreRegression']}, () => {
            cy.loginAsHrPersonnel()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("accessToken")
                    expect(response.body).to.have.property("refreshToken")
                })
        })

        it('I should not be able to login by passing an invalid authorization token',{ tags: '@coreRegression' },  () => {
            cy.loginInvalidToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Unauthorized") 
                })
        })

        it('I should not be able to login without passing an authorization token', () => {
            cy.loginNoToken()
                .then(response => {
                    expect(response.status).to.eq(401)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "Unauthorized") 
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