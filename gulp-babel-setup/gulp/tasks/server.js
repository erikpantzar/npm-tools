'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

var browserSyncTask = function() {
	browserSync({
		server: {
		  baseDir: './'
		}
	});

	gulp.watch('src/**/*.*', ['scripts']);
};

gulp.task('server', ['scripts'], browserSyncTask);
module.exports = browserSyncTask;
