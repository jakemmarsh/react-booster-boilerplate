'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', () => {

  gulp.watch(config.sourceDir + 'index.html',      ['copyIndex']);
  gulp.watch(config.images.src + 'index.html',     ['images']);
  gulp.watch(config.images.fonts + 'index.html',   ['fonts']);

});
