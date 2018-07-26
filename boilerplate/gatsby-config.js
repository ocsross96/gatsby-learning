const postCssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          postCssImport(),
          autoprefixer()
        ]
      }
    },
    {
      resolve: `gatsby-plugin-module-local-ident-name`,
      options: {
        localIdentName: "[local]-[hash:base64:5]",
        includeSASS: true
      }
    }
  ]
};
