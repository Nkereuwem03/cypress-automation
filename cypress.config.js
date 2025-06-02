const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  // You are free to customize any of the reporterOptions below to suit your reporting needs.
  // For more information on the available options, please refer to the documentation: https://github.com/LironEr/cypress-mochawesome-reporter#options](https://github.com/LironEr/cypress-mochawesome-reporter#options)
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: false,
    inlineAssets: true,
    timestamp: 'dd/mm/yyyy_HH.MM.ss',
    saveAllAttempts: false,
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
    videosFolder: 'cypress/videos',
    // code: true,
    // reportPageTitle: 'Cypress Test Report',
    // reportFilename: 'cypress-test-report',
    // quiet: false,
    // autoOpen: false,
    // mochaFile: 'cypress/reports/mocha-results.xml',
    // screenshotsFolder: 'cypress/screenshots',
    // enableCharts: true,
    // enableCode: true,
    // enableInlineAssets: true,
    // enableReportPageTitle: true,
    // enableReportFilename: true,
    // enableQuiet: true,
    // enableAutoOpen: true,
    // enableMochaFile: true,
    // enableVideo: true,
    // enableVideoCompression: true,
    // enableVideoUploadOnPasses: true,
    // enableScreenshotsFolder: true,
    // enableVideosFolder: true,
  },

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
