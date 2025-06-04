const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  videoUploadOnPasses: false,
  retries: {
    runMode: 3,
    openMode: 3,
  },
  trashAssetsBeforeRuns: true,
  globalTimeout: 60000,
  // defaultCommandTimeout: 10000,
  // pageLoadTimeout: 6000,
  // requestTimeout: 15000,
  // responseTimeout: 15000

  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    timestamp: 'dd/mm/yyyy_HH.MM.ss',
    saveAllAttempts: false,
    // code: true,
    // reportPageTitle: 'Cypress Test Report',
    // reportFilename: 'cypress-test-report',
    // quiet: false,
    // autoOpen: false,
    // mochaFile: 'cypress/reports/mocha-results.xml',
    // screenshotsFolder: 'cypress/screenshots',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on)
    }
  },
});
