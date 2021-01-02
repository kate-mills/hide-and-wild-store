require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hide and Wild`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `kate-mills`,
    siteUrl: `https://hideandwild.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-snipcartv3`,
      options: {
        apiKey: process.env.GATSBY_SNIPCART_APIKEY,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hide and Wild`,
        short_name: `Hide+Wild`,
        description: `Hand cut designs made with love and natural elements by Hilary Molloy, in the beautiful Napa Valley.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#dfccc0`,
        display: `standalone`, //minimal-ui
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: { purpose: `maskable` },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hideandwild.netlify.app',
        sitemap: 'https://hideandwild.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
