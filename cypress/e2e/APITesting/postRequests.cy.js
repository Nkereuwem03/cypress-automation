describe("API Testing - POST Requests", () => {
  it("should create a booking with hard coded JSON object", () => {
    const requestBody = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    };
    cy.request(
      "POST",
      "https://restful-booker.herokuapp.com/booking",
      requestBody
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("bookingid");
      expect(res.body.booking.firstname).to.eq("Jim");
      expect(res.body).to.have.nested.property("booking.firstname");
      expect(res.body).to.have.nested.property("booking.firstname", "Jim");
      expect(res.body)
        .to.have.nested.property("booking.firstname")
        .to.eq("Jim");
    });
  });

  it("should create a booking with dynamically generated JSON object", () => {
    const requestBody = {
      firstname: Math.random().toString(5).substring(2),
      lastname: Math.random().toString(5).substring(2),
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    };
    cy.request(
      "POST",
      "https://restful-booker.herokuapp.com/booking",
      requestBody
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("bookingid");
      expect(res.body.booking.firstname).to.eq(requestBody.firstname);
      expect(res.body).to.have.nested.property("booking.firstname");
      expect(res.body).to.have.nested.property(
        "booking.firstname",
        requestBody.firstname
      );
      expect(res.body)
        .to.have.nested.property("booking.firstname")
        .to.eq(requestBody.firstname);
    });
  });

  it("should create a booking using fixture data", () => {
    cy.fixture("postRequests/booking").then((requestBody) => {
      cy.request(
        "POST",
        "https://restful-booker.herokuapp.com/booking",
        requestBody
      ).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property("bookingid");
        expect(res.body).has.property("bookingid");
        expect(res.body.booking.firstname).to.eq(requestBody.firstname);
        expect(res.body).to.have.nested.property("booking.firstname");
        expect(res.body).to.have.nested.property(
          "booking.firstname",
          requestBody.firstname
        );
        expect(res.body)
          .to.have.nested.property("booking.firstname")
          .to.eq(requestBody.firstname);
      });
    });
  });
});