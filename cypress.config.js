const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/features/**/*.feature',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    env: {},

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      const configFile = config.env.configFile;
      if (configFile) {
        const envConfig = require(`./config/${configFile}.json`);
        config.baseUrl = envConfig.baseUrl;
        config.env = { ...config.env, ...envConfig };
      }

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Test Report - Cypress + Cucumber',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    cucumber: {
      stepDefinitions: 'cypress/e2e/step_definitions'
    }
  }
});
