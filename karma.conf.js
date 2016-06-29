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

    // TODO: figure out source maps
    webpack: {
      module: {
        loaders: [
          {
            test: /\.s?css$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.js$/,
            loaders: ['babel?cacheDirectory']
          }
        ],
        resolve: {
          extensions: ['', '.js']
        },
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
