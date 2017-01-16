import path                         from 'path';
import webpack                      from 'webpack';
import merge                        from 'webpack-merge';
import ExtractTextPlugin            from 'extract-text-webpack-plugin';
import CleanPlugin                  from 'clean-webpack-plugin';
import HtmlWebpackPlugin            from 'html-webpack-plugin';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import isomorphicConfig             from './webpack-isomorphic.config';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;
const PATHS = {
  root: path.join(__dirname, '.'),
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(isomorphicConfig)
  .development(ENV === 'development');

process.env.BABEL_ENV = ENV;

const common = {
  content: PATHS.src,

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
    filename: 'js/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory']
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      }
    ]
  },

  sassLoader: {
    includePaths: [path.join(PATHS.src, 'sass')]
  },

  plugins: [
    webpackIsomorphicToolsPlugin,
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
        test: webpackIsomorphicToolsPlugin.regular_expression('styles'),
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
        test: webpackIsomorphicToolsPlugin.regular_expression('styles'),
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

if ( ENV === 'development' || ENV === 'test'  || !ENV ) {
  envConfig = development;
} else if ( ENV === 'production' ) {
  envConfig = dist;
}

export default merge(common, envConfig);
