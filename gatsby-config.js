let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `TeckAid`,
    description: `Multi-Channel eCommerce brand and product management services.`,
    author: `Nasir Ali`,
    siteUrl: `https://teckaid.com/`,
    phone: '832-856-3488',
    fax: '000-000-0000',
    address: 'Houston, TX',
    email: 'hello@teckaid.com',
    slide1: 'Grow Your Brand With Multichannel Selling.',
    slideP1: 'Data-Driven Product Placement, SEO Content Performance & Strategic Global Distribution',
    slide2: 'Selling Private Label Brand? We Can Help!',
    slideP2: 'Place your products on Amazon, Walmart, eBay, Etsy, Google Shopping and more.',
    slide3: 'Let us do the heavy lifting for your business.',
    slideP3: 'Optimization, Product Ranking, Brand Monitoring, & Account Growth Management',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/teckaidfav.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: ['article'],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: "",
    //       password: "",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
