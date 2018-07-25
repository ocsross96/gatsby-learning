const {
  sassGlobals,
} = require('./build-utils/paths');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     data: `@import "utils/main";`,
    //     includePaths: [
    //       sassGlobals
    //     ]
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [
    //       require(`postcss-import`),
    //       require(`autoprefixer`)
    //     ]
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-postcss-sass`,
    //   options: {
    //     postCssPlugins: [
    //       require(`postcss-import`)(),
    //       require(`autoprefixer`)()
    //     ]
    //   },
    // }
  ]
};
