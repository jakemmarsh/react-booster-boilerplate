'use strict';

import gulp   from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('lint', () => {

    return gulp.src([config.scripts.src, '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());

});
