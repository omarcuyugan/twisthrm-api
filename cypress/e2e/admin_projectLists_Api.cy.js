{
  describe('Get all Projects API as an HR Personnel', () => {
    it('I should be able to fetch all the added projects', { tags: ['@smoke', '@coreRegression'] }, () => {
      cy.getAllProjects()
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("project").to.have.property("length")
        })
    });

    it('Should not be able to fetch projects by passing invalid token', () => {
      cy.getAllProjectsInvalidToken()
        .then(response => {
          expect(response.status).to.eq(401)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("message", "Invalid token")
        })
    });

    it('Should not be able to fetch projects by passing empty token', () => {
      cy.getAllProjectsEmptyToken()
        .then(response => {
          expect(response.status).to.eq(401)
          expect(response).to.have.property("body")
          expect(response.body).to.include("ACCESS DENIED")
        })
    });

    it('Projects should be in alphabetical order by default', () => {
      cy.projectsAtoZ()
    });

    it('"totalRecords" value in the response data must be equal to the list of projects', () => {
      cy.getAllProjects()
        .then(response => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body.project).to.have.length(count)
          expect(response.body).to.have.property("totalRecords", count)
          expect(count).to.equal(response.body.project.length)
        })
    });

    it('Response must contain the following: -project -totalRecords', () => {
      cy.getAllProjects()
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("project")
          expect(response.body).to.have.property("totalRecords")
        })
    });

    it('Fetch project record must have the following details in the response: id-project_name,image_url,tech_tools,is_deleted,domain_name', () => {
      cy.getAllProjects()
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body.project[0]).to.have.property("id")
          expect(response.body.project[0]).to.have.property("project_name")
          expect(response.body.project[0]).to.have.property("image_url")
          expect(response.body.project[0]).to.have.property("tech_tools")
          expect(response.body.project[0]).to.have.property("is_deleted")
          expect(response.body.project[0]).to.have.property("domain_name")
        })
    });

    it('Validate invalid url path', () => {
      cy.getProjectInvalidPath()
        .then(response => {
          expect(response.status).to.eq(404)
          expect(response).to.have.property("body")
          expect(response.body).to.include("Cannot GET /twisthrm/api/v1/projects")
        })
    });

    it('Validate missing url path', () => {
      cy.getProjectMissingPath()
        .then(response => {
          expect(response.status).to.eq(404)
          expect(response).to.have.property("body")
          expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
        })
    });

    it('I should be able to search a project by passing valid token', { tags: ['@smoke', '@coreRegression'] }, () => {
      cy.searchProject()
        .then(async (response) => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          for (let x = 0; x < count; x++) {
            const projectName = response.body.project[x].project_name
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(projectName).to.contains("Easy",)
          }
        })
    });

    it('I should not be able to search a project by passing invalid token', () => {
      cy.searchProjectInvalid()
        .then(response => {
          expect(response.status).to.eq(401)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("message", "Invalid token")
        })
    });

    it('I should not be able to search a project by passing empty token', () => {
      cy.searchProjectNoToken()
        .then(response => {
          expect(response.status).to.eq(401)
          expect(response).to.have.property("body")
          expect(response.body).to.include("ACCESS DENIED")
        })
    });

    it('Searching a domain will display a list of projects related to it ', () => {
      cy.searchDomain()
        .then(async (response) => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("totalRecords", count)

          for (let x = 0; x < count; x++) {
            const project = response.body.project[x]
            const domain = project.domain_name
            expect(domain).to.contains("Real Estate",)
          }
        })
    });

    it('Searching for a technology and tools related keyword will display a list of projects related to it ', () => {
      cy.searchTechAndTools()
        .then(async (response) => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("totalRecords", count)
          for (let x = 0; x < count; x++) {
            const project = response.body.project[x]
            const techAndTools = project.tech_tools
            cy.log(techAndTools)
            expect(techAndTools).to.contains("React JS")
          }
        })
    });

    it('Search project record must have the following details in the response:project, page, totalRecords, pageSize', () => {
      cy.searchProject()
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("page")
          expect(response.body).to.have.property("totalRecords")
          expect(response.body).to.have.property("pageSize")
        })
    });

    it('Search result must be related to the search keyword', { tags: ['@smoke', '@coreRegression'] }, () => {
      cy.searchProject()
        .then(async (response) => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          for (let x = 0; x < count; x++) {
            const projectName = response.body.project[x].project_name
            expect(response.status).to.eq(200)
            expect(response).to.have.property("body")
            expect(projectName).to.contains("Easy",)
          }
        })
    });

    it('Search result list must be equal to the "totalRecords" parameter', () => {
      cy.searchProject()
        .then(response => {
          let count = Cypress.$(response.body.project).length
          cy.log(count)
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body.project).to.have.length(count)
          expect(response.body).to.have.property("totalRecords", count)
          expect(count).to.equal(response.body.project.length)
        })
    });

    it('Invalid URL request parameters "page" must be validated', () => {
      cy.searchProjectInvalidPage()
        .then(response => {
          expect(response.status).to.eq(400)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("message", "Invalid page parameter")
        })
    });

    it('Invalid URL request parameters "pageSize" must be validated', () => {
      cy.searchProjectInvalidPageSize()
        .then(response => {
          expect(response.status).to.eq(400)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("message", "Invalid pageSize parameter")
        })
    });

    it('Invalid URL request path url must be validated', () => {
      cy.searchProjectInvalidUrl()
        .then(response => {
          expect(response.status).to.eq(404)
          expect(response).to.have.property("body")
          expect(response.body).to.include("Cannot GET /twisthrm/api/v1/projects")
        })
    });

    it('Missing URL request path must be validated', () => {
      cy.searchProjectMissingUrl()
        .then(response => {
          expect(response.status).to.eq(404)
          expect(response).to.have.property("body")
          expect(response.body).to.include("Cannot GET /twisthrm/api/v1/")
        })
    });

    it('A message "No data found" is in the response when there are no related searches', () => {
      cy.searchProjectNoDataFound()
        .then(response => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property("body")
          expect(response.body).to.have.property("message", "No data found.")
        })
    });
  })
}