'use strict';

import changed from 'gulp-changed';
import gulp    from 'gulp';
import config  from '../config';

gulp.task('fonts', function() {

  return gulp.src(config.fonts.src)
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest));

});
