module.exports = {
  siteMetadata: {
    title: `Jay Bien, Full Stack Dev`,
    description: `Javascript developer. React, Node, SQL, Mongodb.`,
    author: `Jay Bien-aimé`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
          extensions: [`.mdx`, `.md`],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
