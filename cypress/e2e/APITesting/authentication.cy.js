describe('authentications', () => {

  let accessToken;

  before('should get OAuth access token before tests', () => {
    cy.request({
      method: "POST",
      url: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: "Ov23lifiZusz6HiP6DsM",
        client_secret: "92653c368c45e68b19b4f7bd1b8e5d8c446e9467",
        code: "f9e231e3dbc75682ee4a",
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
        user: 'postman',
        pass: 'password'
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
        username: 'postman',
        password: 'password',
        method: 'digest'
      }
    }).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.authenticated).equal(true)
    })
  });

  it('bearer token authentication', () => {
    const token = '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'
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
        appid: "711175a533db7ee9bac7a033aee34839",
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