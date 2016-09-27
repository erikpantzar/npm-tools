'use strict';

var gulp = require('gulp');

var watchTask = function() {
	gulp.watch('src/**/*.js', ['scripts']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
