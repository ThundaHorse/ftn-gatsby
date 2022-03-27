exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
          {
            test: /@fullcalendar\/google-calendar/,
            use: loaders.null(),
          },
          {
            test: /react-google-calendar-api/,
            use: loaders.null(),
          },
          {
            test: /@fullcalendar\/react/,
            use: loaders.null(),
          },
          {
            test: /@fullcalendar\/daygrid/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
