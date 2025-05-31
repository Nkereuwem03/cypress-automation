const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on)
    }
    
    // defaultCommandTimeout: 10000,
    // pageLoadTimeout: 6000,
    // requestTimeout: 15000,
    // responseTimeout: 15000
  },
});
