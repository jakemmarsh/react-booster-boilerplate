'use strict';

import gulp             from 'gulp';
import webpack          from 'webpack';
import gulpWebpack      from 'gulp-webpack';
import gutil            from 'gulp-util';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig    from '../../webpack.config.babel';
import config           from '../config';

gulp.task('webpack:development', () => {

  const compiler = webpack(webpackConfig);
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  new webpackDevServer(compiler, {
    contentBase: config.buildDir,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
  }).listen(port, host, (err) => {
    if ( err ) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', `http://${host}:${port}`);
  });

});

gulp.task('webpack:production', () => {

  return gulp.src(config.scripts.entry)
      .pipe(gulpWebpack(webpackConfig, webpack))
      .pipe(gulp.dest(config.scripts.dest));

});
