import webpack       from 'webpack';
import Express       from 'express';
import webpackConfig from '../webpack.config.babel';

const compiler = webpack(webpackConfig);
const PORT     = process.env.PORT;

const serverOptions = {
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
};

const app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(PORT, (err) => {
  if ( err ) {
    console.error(err);
  }
  console.info(`==> 🚧  Webpack development server listening on port ${PORT}`);
});
