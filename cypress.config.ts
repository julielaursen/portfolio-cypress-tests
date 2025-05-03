import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://julielaursen.github.io/",
    setupNodeEvents(on, config) {},
  },
})
