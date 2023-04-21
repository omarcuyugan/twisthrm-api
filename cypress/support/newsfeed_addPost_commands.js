{
  const token = require("../fixtures/token/token.json");
  const url = require("../fixtures/testData/urlApi.json");
  const addPost = require("../fixtures/requestBody/addPost.json");

  //Post - Text Only
  Cypress.Commands.add("postText", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postText,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextAnnouncement", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postAnnouncement,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextBirthday", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postBirthday,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextEvent", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postInvalidToken", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.invalidToken,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("emptyContentAndFile", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.emptyTextWithImage,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postNewsfeedInvalidUrl", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedInvalidUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.hrPersonnel,
      },
      failOnStatusCode: false,
    });
  });

  //Post - With IMAGE

  Cypress.Commands.add("postWithImage", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidToken", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.invalidToken,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageStandard", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageAnnouncement", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageBirthday", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "birthdays");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageEvent", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "events");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageEmptyContent", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidURL", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Invalid Url");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.newsfeedPostInvalidUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidFile", () => {
    const fileName = "testFiles/20230101.csv";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Invalid Url");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.hrPersonnel,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  //Employee

  //Post - Text Only

  Cypress.Commands.add("postTextEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postText,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextAnnouncementEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postAnnouncement,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextBirthdayEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postBirthday,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postTextEventEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postInvalidTokenEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.invalidToken,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("emptyContentAndFileEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedUrl,
      body: addPost.emptyTextWithImage,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  Cypress.Commands.add("postNewsfeedInvalidUrlEmp", () => {
    cy.request({
      method: "POST",
      url: url.postNewsfeedInvalidUrl,
      body: addPost.postEvent,
      headers: {
        Authorization: token.employeeDev,
      },
      failOnStatusCode: false,
    });
  });

  //Post With IMAGE

  Cypress.Commands.add("postWithImageEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidTokenEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.invalidToken,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageStandardEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageAnnouncementEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "announcements");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageBirthdayEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "birthdays");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageEventEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Automation Post with Image");
      formData.append("groupId", "development");
      formData.append("postType", "events");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageEmptyContentEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidURLEmp", () => {
    const fileName = "testFiles/Image.png";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Invalid Url");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.newsfeedPostInvalidUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });

  Cypress.Commands.add("postWithImageInvalidFileEmp", () => {
    const fileName = "testFiles/20230101.csv";
    cy.fixture(fileName, "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, "file/csv");
      const formData = new FormData();
      formData.append("content", "Invalid Url");
      formData.append("groupId", "development");
      formData.append("postType", "standard");
      formData.append("file", blob, fileName);
      cy.request({
        method: "POST",
        url: url.postNewsfeedUrl,
        body: formData,
        headers: {
          Authorization: token.employeeDev,
          "content-type": "multipart/form-data",
        },
        failOnStatusCode: false,
      });
    });
  });
}
