# Cypress Automation Project

This repository contains end-to-end and API test automation examples using [Cypress](https://www.cypress.io/). It demonstrates best practices for UI and API testing, custom commands, data-driven tests, Page Object Model, authentication, and more.

---

## Features

- **UI Automation:**  
  Automated tests for login, form fields, dropdowns, mouse operations, navigation, and more on real demo sites.

- **API Testing:**  
  Covers GET, POST, PUT, DELETE requests, authentication (basic, bearer, OAuth2, API key), schema validation, XML/JSON parsing, and API chaining.

- **Custom Commands:**  
  Reusable Cypress commands for common actions (e.g., login, iframe handling, clicking links by label).

- **Data-Driven Testing:**  
  Uses Cypress fixtures to run tests with multiple data sets.

- **Page Object Model (POM):**  
  Demonstrates maintainable test structure for scalable projects.

- **Best Practices:**  
  All secrets and credentials are managed via Cypress environment variables.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Nkereuwem03/cypress-automation.git
   cd cypress-automation
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `cypress.env.json` file in the project root (do **not** commit secrets to git!):

     ```json
     {
       "client_id": "your_github_client_id",
       "client_secret": "your_github_client_secret",
       "code": "your_github_oauth_code",
       "username": "your_username",
       "password": "your_password",
       "github_token": "your_github_token",
       "appid": "your_openweathermap_api_key"
     }
     ```

---

## Running Tests

### Open Cypress Test Runner (UI)
```sh
npx cypress open
```

### Run All Tests in Headless Mode
```sh
npx cypress run
```

---

## Project Structure

```
cypress/
  e2e/                # All test specs (UI and API)
  fixtures/           # Test data for data-driven tests
  support/
    commands.js       # Custom Cypress commands
    e2e.js            # Support file for e2e tests
cypress.config.js     # Cypress configuration
```

---

## Custom Commands

- **`cy.getIframe(selector)`**  
  Easily interact with elements inside iframes.
- **`cy.clickLink(linkText)`**  
  Clicks a link by its label (case-insensitive).
- **`cy.loginApp(url, username, password)`**  
  Logs into an application using provided credentials.

---

## Best Practices

- **No secrets in code:**  
  All sensitive data is managed via environment variables.
- **Reusable code:**  
  Use of custom commands and fixtures for maintainability.
- **Clear test naming:**  
  Suites and tests are named for clarity and reporting.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License.

---

## References

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)