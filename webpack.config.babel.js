import path              from 'path';
import webpack           from 'webpack';
import merge             from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanPlugin       from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const TARGET = process.env.NODE_ENV;
const PATHS = {
  root: path.join(__dirname, '.'),
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    ['js/bundle.js']: [
      `webpack-hot-middleware/client?path=http://${HOST}:${PORT}/__webpack_hmr&reload=true`,
      `${PATHS.src}/main.js`
    ],
  },

  resolve: {
    moduleDirectories: [PATHS.src, 'node_modules'],
    extensions: ['', '.js', 'json']
  },

  output: {
    path: PATHS.dist,
    filename: '[name]'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory']
      }
    ]
  },

  sassLoader: {
    includePaths: [path.join(PATHS.src, 'sass')]
  },

  plugins: [
    new CleanPlugin([PATHS.dist], {
      root: PATHS.root
    }),
    new HtmlWebpackPlugin({
      title: 'React Booster Boilerplate',
      filename: path.join(PATHS.dist, 'index.html')
    })
  ]
};

const development = {
  devtool: 'inline-source-map',

  output: {
    publicPath: `http://${HOST}:${PORT}/`
  },

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        include: PATHS.src,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const dist = {
  output: {
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        include: PATHS.src,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./css/bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
      compress: { drop_console: true } // eslint-disable-line camelcase
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

let envConfig;

if ( TARGET === 'development' || TARGET === 'test'  || !TARGET ) {
  envConfig = development;
} else if ( TARGET === 'production' ) {
  envConfig = dist;
}

export default merge(common, envConfig);
