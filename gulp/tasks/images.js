'use strict';

import changed  from 'gulp-changed';
import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';
import config   from '../config';

gulp.task('images:development', () => {

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulp.dest(config.images.dest));

});

gulp.task('images:production', () => {

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));

});

