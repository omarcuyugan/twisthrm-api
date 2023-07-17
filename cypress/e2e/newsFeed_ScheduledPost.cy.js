{
  describe("Create Scheduled Post as an HR Personnel", () => {
    it("It should be able to create scheduled post upon passing valid token", () => {
      cy.createSchedPost().then((response) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Successfully created scheduled Post"
        );
      });
    });

    it("It should not be able to create scheduled post upon passing invalid token", () => {
      cy.createSchedPostInvalid().then((response) => {
        expect(response.status).to.eq(401);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property("message", "Invalid token");
      });
    });

    it("It should not be able to create scheduled post upon passing missing token", () => {
      cy.createSchedPostMissing().then((response) => {
        expect(response.status).to.eq(401);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property("message", "Invalid token");
      });
    });

    it("It should not be able to create scheduled post upon passing missing token", () => {
      cy.createSchedPostEmpty().then((response) => {
        expect(response.status).to.eq(401);
        expect(response).to.have.property("body");
        expect(response).to.have.property("body", "ACCESS DENIED");
      });
    });

    it("Validate Empty Content Field", () => {
      cy.createSchedPostEmptyContent().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "scheduled Post does not contain any text"
        );
      });
    });

    it("Validate Missing Content Field", () => {
      cy.createSchedPostMissingContent().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "scheduled Post must contain either a text or media"
        );
      });
    });

    it("Validate Empty Date Field", () => {
      cy.createSchedPostEmptyDateField().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Post At (Date) should not be empty"
        );
      });
    });

    it("Validate Missing Date Field", () => {
      cy.createSchedPostMissingDateField().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Post At (Date) should not be empty"
        );
      });
    });

    it("Validate Invalid Date Format", () => {
      cy.createSchedPostInvalidDateFormat().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Invalid date format"
        );
      });
    });

    it("Validate Past dates", () => {
      cy.createSchedPostValidatePastDate().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Post At (Date) should be in the future: 06/01/2023"
        );
      });
    });

    it("Validate Same date", () => {
      cy.createSchedPostValidateSameDate().then((response) => {
        expect(response.status).to.eq(400);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "Cannot Post scheduled post in the same day"
        );
      });
    });

    it("I should not be able to create scheduled post by passing invalid URL", () => {
      cy.createSchedPostInvalidUrl().then((response) => {
        expect(response.status).to.eq(404);
        expect(response).to.have.property("body");
        expect(response.body).contains(
          "Cannot POST /twisthrm/api/v1/scheduled-posts/create"
        );
      });
    });
  });

  describe("As an Employee", () => {
    it("I should not be able to create scheduled post as an employee", () => {
      cy.createSchedPostEmployee().then((response) => {
        expect(response.status).to.eq(401);
        expect(response).to.have.property("body");
        expect(response.body).to.have.property(
          "message",
          "You don't have the right permission for this action."
        );
      });
    });
  });
}
