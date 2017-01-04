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
  performance: {
    hints: TARGET === 'production' ? 'warning': false
  },

  entry: {
    ['js/bundle.js']: [`${PATHS.src}/main.js`],
  },

  resolve: {
    modules: [PATHS.src, 'node_modules'],
    extensions: ['.js', 'json']
  },

  output: {
    path: PATHS.dist,
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory']
      }
    ]
  },

  plugins: [
    new CleanPlugin([PATHS.dist], {
      root: PATHS.root
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        sassLoader: {
          includePaths: [path.join(PATHS.src, 'sass')]
        }
      }
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
    rules: [
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
    rules: [
      {
        test: /\.s?css$/,
        include: PATHS.src,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./css/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true, // eslint-disable-line camelcase
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true, // eslint-disable-line camelcase
        evaluate: true,
        if_return: true, // eslint-disable-line camelcase
        join_vars: true // eslint-disable-line camelcase
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    historyApiFallback: true,
    port: PORT,
    compress: false,
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    }
  }
};

let envConfig;

if ( TARGET === 'development' || TARGET === 'test'  || !TARGET ) {
  envConfig = development;
} else if ( TARGET === 'production' ) {
  envConfig = dist;
}

export default merge(common, envConfig);
