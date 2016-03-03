'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('development', ['clean'], (cb) => {

  runSequence(['webpack:development', 'copyIndex', 'images:development', 'fonts'], cb);

});
