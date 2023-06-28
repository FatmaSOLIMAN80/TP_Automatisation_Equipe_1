import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
