module.exports = {
  siteMetadata: {
    title: `Patrick Franz Portfolio 2021`,
    description: `Kicking off the year after the best/worst year ever.`,
    author: `@patrickfranz`,
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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'i17xcezk',
        dataset: 'production',
        apiVersion: '2021-03-26',
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
        icon: `src/images/favicon-32x32.png`,
      },
    },

    `gatsby-plugin-gatsby-cloud`,
  ],
};
