import path             from 'path';
import webpack          from 'webpack';
import merge            from 'webpack-merge';
import NpmInstallPlugin from 'npm-install-webpack-plugin';

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {

  entry: {
    app: [`${PATHS.app}/js/main.js`]
  },

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: `${PATHS.build}/js/`,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        include: PATHS.app,
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        include: PATHS.app,
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory']
      }
    ]
  }

};

const start = {

  devtool: 'eval-source-map',

  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin({
      save: false,
      saveDev: true
    })
  ]

};

const build = {

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { drop_console: true } // eslint-disable-line camelcase
    })
  ]

};

let envConfig;

if ( TARGET === 'start'  || !TARGET ) {
  envConfig = start;
} else if ( TARGET === 'build' ) {
  envConfig = build;
}

export default merge(common, envConfig);
