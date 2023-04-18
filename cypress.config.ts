import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io/computers',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
