const path = require('path');
const args = require('yargs').argv;

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = function(config) {
  const hasSingleFile = !!args.file;
  const files = hasSingleFile ? args.file : 'src/js/**/*test.js';
  const PREPROCESSORS = {};

  PREPROCESSORS[files] = ['webpack'];

  config.set({

    singleRun: !hasSingleFile,

    files: [files],

    frameworks: ['mocha'],

    preprocessors: PREPROCESSORS,

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
            exclude: /node_modules/,
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
