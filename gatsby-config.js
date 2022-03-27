require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Follow the Nerd`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `FTN`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-google-calendar`,
    //   options: {
    //     client_id: process.env.GOOGLE_CLIENT_ID,
    //     apiKey: process.env.GOOGLE_CLIENT_SECRET,
    //     calendarId: process.env.CALENDAR_ID,
    //     scopes: process.env.GOOGLE_SCOPE,
    //     discovery: process.env.GOOGLE_DISCOVERY_DOCS,
    //     assumedUser: process.env.DEFAULT_EMAIL,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
