describe('authentications', () => {

  let accessToken;

  before('should get OAuth access token before tests', () => {
    cy.request({
      method: "POST",
      url: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: Cypress.env('client_id'), // Replace with your GitHub client ID
        client_secret: Cypress.env('client_secret'), // Replace with your GitHub client secret
        code: Cypress.env('code'), // Replace with the code you received after authorization
      },
    }).then((response) => {
      accessToken = response.body.split("=")[1];
      cy.log(accessToken);
    });
  });

  it('basic authentication', () => {
    cy.request({
      method: 'GET',
      url: 'https://postman-echo.com/basic-auth', 
      auth: {
        user: Cypress.env('username'),
        pass: Cypress.env('password'),
      }
    }).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.authenticated).equal(true)
    })
  });

  it('digest authentication', () => {
    cy.request({
      method: 'GET',
      url: 'https://postman-echo.com/basic-auth', 
      auth: {
        user: Cypress.env('username'),
        pass: Cypress.env('password'),
        method: Cypress.env('method') ? 'digest' : 'basic', // Use digest if specified
      }
    }).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.authenticated).equal(true)
    })
  });

  it('bearer token authentication', () => {
    const token = Cypress.env('github_token'); // Replace with your GitHub token
    expect(token).to.exist; // Ensure the token is set in Cypress environment variables
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it('api key authentication', () => {
    cy.request({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast/daily",
      qs: {
        q: "Delhi",
        appid: Cypress.env("appid"), // Replace with your OpenWeatherMap API key
      },
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it('OAuth2 request', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.github.com/user/repos',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      expect(response.status).equal(200)
    })
  });
});