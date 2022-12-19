{
    describe('Pagination As an HR Personnel API', () => {
        it('Should be able to filter list of employees using "page" parameter', () => {
            cy.pagePim()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("employees")
                })
        })

        it('Should be able to get a number of employees by editing the pageSize parameter', () => {
            cy.pageSize()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("employees")
                    expect(response.body).to.have.property("employees").to.have.length(15)
                })
        })

        it('"page" parameter in the request must be equal to the "page" parameter in the response', () => {
            cy.pagePim()
                .then(response => {
                    expect(response.status).to.eq(200)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("page", "2")
                })
        })

        it('Invalid URL request path structure must be validated', () => {
            cy.invalidUrlPIM()
                .then(response => {
                    expect(response.status).to.eq(404)
                    expect(response).to.have.property("body")
                    expect(response.body).to.include("Cannot GET /twisthrm/api/v1/employees")
                })
        })

        it('Empty parameters "page" should be validated', () => {
            cy.emptyPagePIM()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Empty parameters "pageSize" should be validated', () => {
            cy.emptyPageSizePIM()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('Invalid parameters "page" should be validated', () => {
            cy.invalidPagePIM()
                .then(response => {
                    expect(response.status).to.eq(400)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("error", "The request can't be fulfilled. Please make sure you have entered a number.")
                })
        })

        it('Invalid parameters "pageSize" should be validated', () => {
            cy.invalidPageSizePIM()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })

        it('I should not be able to pass a SQL Injection on the endpoint of the API', () => {
            cy.sqlInjection()
                .then(response => {
                    expect(response.status).to.eq(500)
                    expect(response).to.have.property("body")
                    expect(response.body).to.have.property("message", "There was an error when getting all employees")
                })
        })
    })
}