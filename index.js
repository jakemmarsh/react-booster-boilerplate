import path                   from 'path';
import webpack                from 'webpack';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import webpackConfig          from './webpack.config.babel';
import isomorphicConfig       from './webpack-isomorphic.config';

const PORT = process.env.PORT;
const root = path.resolve(__dirname, '..');
const compiler = webpack(webpackConfig);

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .development(process.env.NODE_ENV === 'development')
  .server(root, () => {
    const server = require('./server');

    if ( process.env.NODE_ENV === 'development' ) {
      server.use(require('webpack-hot-middleware')(compiler));
    }

    console.log('about to listen inside index.js');

    server.listen(PORT, () => {
      console.info(`==> 🚧  Express server listening on port ${PORT}`);
    });
  });
