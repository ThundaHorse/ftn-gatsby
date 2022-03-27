require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Follow the Nerd`,
    description: `Atlanta's leading career consulting service. You’ll be in good hands with our professional writers. Our team of writers has expertise in more than 65 industries and includes certified career coaches, recruiters, and experienced hiring professionals.`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
