import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    setupNodeEvents() {},
    // specPattern: 'cypress/support/component.ts',
    // excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  env: {
    'cypress-react-selector': {
      root: '#root',
    },
    
  },

  e2e: {
    setupNodeEvents() {},
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
});
