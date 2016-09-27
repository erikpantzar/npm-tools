'use strict';

var gulp = require('./gulp')([
    'browserify',
    'clean',
    'sasslint',
    'sass',
    'server',
    'htmlmin',
    'watch'
]);

gulp.task('default', ['sasslint', 'sass', 'browserify', 'htmlmin', 'watch', 'server']);
gulp.task('scripts', ['browserify']);
