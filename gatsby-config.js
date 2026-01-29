let facebook_pixel = ''
let gtm = ''

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `TeckAid - AI Automation Services`,
      short_name: `TeckAid`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#0066cc`,
      display: `minimal-ui`,
      icon: `src/assets/images/teckaidfav.png`,
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
  `gatsby-plugin-sitemap`,
  'gatsby-plugin-robots-txt',
  `gatsby-plugin-netlify`,
  `gatsby-plugin-styled-components`
]

// Conditionally add Google Tag Manager if ID is provided
if (gtm) {
  plugins.push({
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: gtm,
      includeInDevelopment: false
    }
  })
}

// Conditionally add Facebook Pixel if ID is provided
if (facebook_pixel) {
  plugins.push({
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: facebook_pixel,
    }
  })
}

module.exports = {
  siteMetadata: {
    title: `TeckAid`,
    description: `AI automation workflows for small and mid-size businesses in Houston, Dallas, Austin, and San Antonio. Transform your business with custom AI solutions.`,
    author: `Nasir Ali`,
    siteUrl: `https://teckaid.com/`,
    phone: '281-201-0151',
    fax: '000-000-0000',
    address: 'Houston, TX',
    email: 'hello@teckaid.com',
    slide1: 'Transform Your Business with AI Automation',
    slideP1: 'Custom AI workflows for Texas businesses. Automate repetitive tasks and free your team to focus on growth.',
    slide2: 'Cut Operational Costs by Up to 40%',
    slideP2: 'Smart automation solutions using ChatGPT, Claude, and custom integrations. Reduce labor costs while improving efficiency.',
    slide3: 'Custom AI Solutions Built for Your Business',
    slideP3: 'No complexity, no jargon, just results. Texas-based team serving Houston, Dallas, Austin, and San Antonio.',
  },
  plugins
}
