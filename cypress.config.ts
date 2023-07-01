import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 20000,
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    env: {
      "LANGUAGE": "en"
    },
    setupNodeEvents(on, config) {
    },
  },
});
