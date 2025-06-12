import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://julielaursen.github.io",

    setupNodeEvents(on, config) {
      // Register a log task so you can log from tests
      on("task", {
        log(message) {
          console.log(message)
          return null
        },
      })

      return config
    },
  },
})
