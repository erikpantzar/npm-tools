'use strict';

var gulp = require('./gulp')([
    'scripts',
	'server',
	'watch'
]);

gulp.task('default', ['scripts', 'server', 'watch']);
