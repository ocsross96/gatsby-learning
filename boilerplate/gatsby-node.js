const generateBabelConfig = require("gatsby/dist/utils/babel-config");
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

const { extractTextPlugin } = require(`gatsby-1-config-extract-plugin`);
const { cssModulesConfig } = require(`gatsby-1-config-css-modules`);

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-css') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      // loader: extractTextWebpackPlugin.extract(['style', 'css?modules', 'postcss', 'sass']),
      loader: extractTextPlugin(stage).extract(`style`, [
        cssModulesConfig(stage),
        'postcss',
        'sass'
      ]),
    });
  }

  if (stage === 'develop') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      loaders: ['style', 'css?modules', 'postcss', 'sass'],
    });
  }

  if (stage === 'build-javascript') {
    config.removeLoader('sass');
    config.loader(`sass`, {
      test: /\.(sass|scss)/,
      exclude: /\.module\.s[ac]ss$/,
      loader: `null`,
    });

    // TODO: Not sure about this
    config.loader(`sassModules`, {
      test: /\.module\.s[ac]ss$/,
      loader: extractTextPlugin(stage).extract(`style`, [
        cssModulesConfig(stage),
        'sass',
      ]),
    });
  }
  
  if (stage === 'build-html') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      loader: `null`,
    });
  }

  // TODO: do we need program
  const program = {
    directory: __dirname,
    browserslist: ["> 1%", "last 2 versions", "IE >= 9"],
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    console.log('DEBUG - babelConfig:', babelConfig);

    config.removeLoader("js").loader("js", {
      test: /\.jsx?$/,
      exclude: (modulePath) => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/(rp-react-components)/.test(modulePath)
        );
      },
      loader: "babel",
      query: babelConfig,
    });
  });
};