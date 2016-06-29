const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = function(config) {
  config.set({

    files: [
      'src/js/**/test.js'
    ],

    frameworks: ['mocha'],

    preprocessors: {
      'src/js/**/test.js': ['webpack']
    },

    reporters: ['spec'],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.s?css$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.js$/,
            loaders: ['babel?cacheDirectory']
          }
        ],
      },
      sassLoader: {
        includePaths: [path.join(PATHS.src, 'sass')]
      },
      resolve: {
        moduleDirectories: [PATHS.src, 'node_modules'],
        extensions: ['', '.js']
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],

    browsers: ['PhantomJS']

  });
};
