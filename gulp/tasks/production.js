'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('production', ['clean'], (cb) => {

  runSequence('webpack:production', 'lint', ['copyIndex', 'images:production', 'fonts'], cb);

});
