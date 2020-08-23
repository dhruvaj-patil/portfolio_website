module.exports = {
  siteMetadata: {
    title: `Dhruvaj Patil`,
    description: `Dhruvaj's Resume / Portfolio as a Software and Web Developer`,
    siteUrl: `https://www.dhruvaj.com`,
    author: `Dhruvaj Patil`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://dhruvaj-portfolio.herokuapp.com',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'blog',
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dhruvaj Patil`,
        short_name: `Dhruvaj Patil's Website`,
        start_url: `/`,
        background_color: `#B8B8B8`,
        theme_color: `#151C24`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
