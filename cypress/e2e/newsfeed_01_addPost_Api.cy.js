{
  describe("As and HR Personnel", () => {
    describe("Add Post - Text Only API", () => {
      it(
        "Should be able to post on the newsfeed section by passing valid token",
        { tags: ["@smoke", "@coreRegression"] },
        () => {
          cy.postText().then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property("body");
            expect(response.body).to.have.property(
              "message",
              "Successfully created post"
            );
          });
        }
      );

      it("Should not be able to post on the newsfeed section by passing invalid token", () => {
        cy.postInvalidToken().then((response) => {
          expect(response.status).to.eq(401);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property("message", "Invalid token");
        });
      });

      it('Empty keys "content" and "file" must be validated', () => {
        cy.emptyContentAndFile().then((response) => {
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Post must contain either a text or an image"
          );
        });
      });

      it("The default type of post must be standard", () => {
        cy.postText().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property("postType", "standard");
        });
      });

      it('Should be able to post using a post type "Announcement"', () => {
        cy.postTextAnnouncement().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property(
            "postType",
            "announcements"
          );
        });
      });

      it('Should be able to post using a post type "Birthday"', () => {
        cy.postTextBirthday().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property(
            "postType",
            "birthdays"
          );
        });
      });

      it('Should be able to post using a post type "Event"', () => {
        cy.postTextEvent().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property("postType", "events");
        });
      });

      it("Invalid Url path must be validated", () => {
        cy.postNewsfeedInvalidUrl().then((response) => {
          expect(response.status).to.eq(404);
          expect(response).to.have.property("body");
          expect(response.body).to.include(
            "Cannot POST /twisthrm/api/v1/new-newsfeeds/create"
          );
        });
      });

      it('"id" response data must be generated automatically upon creating a new post', () => {
        cy.postText().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property("postId").not.be.null;
        });
      });

      it("The Response must contain the following upon successful post", () => {
        cy.postText().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Successfully created post"
          );
          expect(response.body).to.have.property("postId").not.be.null;
          expect(response.body).to.have.property("result");
          expect(response.body.result).to.have.property("firstName");
          expect(response.body.result).to.have.property("lastName");
          expect(response.body.result).to.have.property("content");
          expect(response.body.result).to.have.property("createdAt");
          expect(response.body.result).to.have.property("updatedAt");
          expect(response.body.result).to.have.property("userId");
          expect(response.body.result).to.have.property("groupId");
          expect(response.body.result).to.have.property("postType");
          expect(response.body.result).to.have.property("imageURL").to.be.null;
        });
      });
    });

    describe("Add Post - With Image API", () => {
      it(
        "Should be able to post on the newsfeed section by passing valid token",
        { tags: ["@smoke", "@coreRegression"] },
        () => {
          cy.postWithImage().then((response) => {
            const bodyString = Cypress.Blob.arrayBufferToBinaryString(
              response.body
            );
            const body = JSON.parse(bodyString);
            expect(response.status).to.eq(200);
            expect(response).to.have.property("body");
            expect(body).to.have.property("postId").not.be.null;
            expect(body.result).to.have.property("imageURL").not.be.null;
          });
        }
      );

      it("Should not be able to post on the newsfeed section by passing invalid token", () => {
        cy.postWithImageInvalidToken().then((response) => {
          const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
          expect(response.status).to.eq(401);
          expect(body).to.be.a("string");
          expect(body).to.include("Invalid token");
        });
      });

      it('Empty keys "content" and "file" must be validated', () => {
        cy.emptyContentAndFile().then((response) => {
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Post must contain either a text or an image"
          );
        });
      });

      it("The default type of post must be standard", () => {
        cy.postWithImageStandard().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "standard");
        });
      });

      it('Should be able to post using a post type "Announcement"', () => {
        cy.postWithImageAnnouncement().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "announcements");
        });
      });

      it('Should be able to post using a post type "Birthday"', () => {
        cy.postWithImageBirthday().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "birthdays");
        });
      });

      it('Should be able to post using a post type "Event"', () => {
        cy.postWithImageEvent().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "events");
        });
      });

      it('Should be able to post when there is a value in all the keys in form data except "content"', () => {
        cy.postWithImageEmptyContent().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("content").to.be.empty;
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "standard");
        });
      });

      it("Invalid Url path must be validated", () => {
        cy.postWithImageInvalidURL().then((response) => {
          const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
          expect(response.status).to.eq(404);
          expect(response).to.have.property("body");
          expect(body).to.include(
            "Cannot POST /twisthrm/api/v1/new-newsfeeds/create"
          );
        });
      });

      it('"id" response data must be generated automatically upon creating a new post', () => {
        cy.postWithImage().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId").not.be.null;
          expect(body.result).to.have.property("imageURL");
        });
      });

      it("The Response must contain the following upon successful post", () => {
        cy.postWithImage().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("message", "Successfully created post");
          expect(body).to.have.property("postId").not.be.null;
          expect(body).to.have.property("result");
          expect(body.result).to.have.property("firstName");
          expect(body.result).to.have.property("lastName");
          expect(body.result).to.have.property("content");
          expect(body.result).to.have.property("createdAt");
          expect(body.result).to.have.property("updatedAt");
          expect(body.result).to.have.property("userId");
          expect(body.result).to.have.property("groupId");
          expect(body.result).to.have.property("postType");
          expect(body.result).to.have.property("imageURL").not.be.null;
        });
      });

      it("Invalid file formats must be validated", () => {
        cy.postWithImageInvalidFile().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(body).to.have.property(
            "message",
            "Invalid or unknown image file format."
          );
        });
      });
    });
  });

  describe("As an Employee", () => {
    describe("Add Post - Text Only API", () => {
      it(
        "Should be able to post on the newsfeed section by passing valid token",
        { tags: ["@smoke", "@coreRegression"] },
        () => {
          cy.postTextEmp().then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property("body");
            expect(response.body).to.have.property(
              "message",
              "Successfully created post"
            );
          });
        }
      );

      it("Should not be able to post on the newsfeed section by passing invalid token", () => {
        cy.postInvalidTokenEmp().then((response) => {
          expect(response.status).to.eq(401);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property("message", "Invalid token");
        });
      });

      it('Empty keys "content" and "file" must be validated', () => {
        cy.emptyContentAndFileEmp().then((response) => {
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Post must contain either a text or an image"
          );
        });
      });

      it("The default type of post must be standard", () => {
        cy.postTextEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property("postType", "standard");
        });
      });

      it('Should be able to post using a post type "Announcement"', () => {
        cy.postTextAnnouncementEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property(
            "postType",
            "announcements"
          );
        });
      });

      it('Should be able to post using a post type "Birthday"', () => {
        cy.postTextBirthdayEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property(
            "postType",
            "birthdays"
          );
        });
      });

      it('Should be able to post using a post type "Event"', () => {
        cy.postTextEventEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body.result).to.have.property("postType", "events");
        });
      });

      it("Invalid Url path must be validated", () => {
        cy.postNewsfeedInvalidUrlEmp().then((response) => {
          expect(response.status).to.eq(404);
          expect(response).to.have.property("body");
          expect(response.body).to.include(
            "Cannot POST /twisthrm/api/v1/new-newsfeeds/create"
          );
        });
      });

      it('"id" response data must be generated automatically upon creating a new post', () => {
        cy.postTextEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property("postId").not.be.null;
        });
      });

      it("The Response must contain the following upon successful post", () => {
        cy.postTextEmp().then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Successfully created post"
          );
          expect(response.body).to.have.property("postId").not.be.null;
          expect(response.body).to.have.property("result");
          expect(response.body.result).to.have.property("firstName");
          expect(response.body.result).to.have.property("lastName");
          expect(response.body.result).to.have.property("content");
          expect(response.body.result).to.have.property("createdAt");
          expect(response.body.result).to.have.property("updatedAt");
          expect(response.body.result).to.have.property("userId");
          expect(response.body.result).to.have.property("groupId");
          expect(response.body.result).to.have.property("postType");
          expect(response.body.result).to.have.property("imageURL").to.be.null;
        });
      });
    });

    describe("Add Post - With Image API", () => {
      it(
        "Should be able to post on the newsfeed section by passing valid token",
        { tags: ["@smoke", "@coreRegression"] },
        () => {
          cy.postWithImageEmp().then((response) => {
            const bodyString = Cypress.Blob.arrayBufferToBinaryString(
              response.body
            );
            const body = JSON.parse(bodyString);
            expect(response.status).to.eq(200);
            expect(response).to.have.property("body");
            expect(body).to.have.property("postId").not.be.null;
            expect(body.result).to.have.property("imageURL").not.be.null;
          });
        }
      );

      it("Should not be able to post on the newsfeed section by passing invalid token", () => {
        cy.postWithImageInvalidTokenEmp().then((response) => {
          const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
          expect(response.status).to.eq(401);
          expect(body).to.be.a("string");
          expect(body).to.include("Invalid token");
        });
      });

      it('Empty keys "content" and "file" must be validated', () => {
        cy.emptyContentAndFileEmp().then((response) => {
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(response.body).to.have.property(
            "message",
            "Post must contain either a text or an image"
          );
        });
      });

      it("The default type of post must be standard", () => {
        cy.postWithImageStandardEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "standard");
        });
      });

      it('Should be able to post using a post type "Announcement"', () => {
        cy.postWithImageAnnouncementEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "announcements");
        });
      });

      it('Should be able to post using a post type "Birthday"', () => {
        cy.postWithImageBirthdayEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "birthdays");
        });
      });

      it('Should be able to post using a post type "Event"', () => {
        cy.postWithImageEventEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "events");
        });
      });

      it('Should be able to post when there is a value in all the keys in form data except "content"', () => {
        cy.postWithImageEmptyContentEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId");
          expect(body.result).to.have.property("content").to.be.empty;
          expect(body.result).to.have.property("imageURL").not.be.null;
          expect(body.result).to.have.property("postType", "standard");
        });
      });

      it("Invalid Url path must be validated", () => {
        cy.postWithImageInvalidURLEmp().then((response) => {
          const body = Cypress.Blob.arrayBufferToBinaryString(response.body);
          expect(response.status).to.eq(404);
          expect(response).to.have.property("body");
          expect(body).to.include(
            "Cannot POST /twisthrm/api/v1/new-newsfeeds/create"
          );
        });
      });

      it('"id" response data must be generated automatically upon creating a new post', () => {
        cy.postWithImageEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("postId").not.be.null;
          expect(body.result).to.have.property("imageURL");
        });
      });

      it("The Response must contain the following upon successful post", () => {
        cy.postWithImageEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(200);
          expect(response).to.have.property("body");
          expect(body).to.have.property("message", "Successfully created post");
          expect(body).to.have.property("postId").not.be.null;
          expect(body).to.have.property("result");
          expect(body.result).to.have.property("firstName");
          expect(body.result).to.have.property("lastName");
          expect(body.result).to.have.property("content");
          expect(body.result).to.have.property("createdAt");
          expect(body.result).to.have.property("updatedAt");
          expect(body.result).to.have.property("userId");
          expect(body.result).to.have.property("groupId");
          expect(body.result).to.have.property("postType");
          expect(body.result).to.have.property("imageURL").not.be.null;
        });
      });

      it("Invalid file formats must be validated", () => {
        cy.postWithImageInvalidFileEmp().then((response) => {
          const bodyString = Cypress.Blob.arrayBufferToBinaryString(
            response.body
          );
          const body = JSON.parse(bodyString);
          expect(response.status).to.eq(400);
          expect(response).to.have.property("body");
          expect(body).to.have.property(
            "message",
            "Invalid or unknown image file format."
          );
        });
      });
    });
  });
}
