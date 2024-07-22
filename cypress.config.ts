// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("cypress")

module.exports = defineConfig({
    // component: {
    //   devServer: {
    //     framework: "react",
    //     bundler: "vite",
    //   },
    // },
    e2e: {
        baseUrl: "http://localhost:5173",
        setupNodeEvents() {
            // implement node event listeners here
        },
    },
})
