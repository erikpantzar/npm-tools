'use strict';

var gulp = require('./gulp')([
    'browserify',
    'clean',
    'sasslint',
    'sass',
    'server',
    'htmlmin',
    'copy',
    'watch'
]);

gulp.task('default', ['sasslint', 'sass', 'browserify', 'htmlmin','copy', 'watch', 'server']);
gulp.task('scripts', ['browserify']);
