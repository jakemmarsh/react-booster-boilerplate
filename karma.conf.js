const path = require('path');
const args = require('yargs').argv;

const PATHS = {
  src: path.join(__dirname, 'src')
};

module.exports = function(config) {
  const hasSingleFile = !!args.file;
  const helperFile = 'utils/test_helper.js';
  const files = hasSingleFile ? args.file : 'src/**/*test.js';
  const preprocessors = {};

  preprocessors[helperFile] = ['webpack'];
  preprocessors[files] = ['webpack'];

  config.set({

    singleRun: !hasSingleFile,

    files: [helperFile, files],

    frameworks: ['mocha'],

    preprocessors: preprocessors,

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
