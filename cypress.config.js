const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "petStore",
  e2e: {
    baseUrl: "https://petstore.swagger.io",
  },
  fixturesFolder: false,
  video: false
});
