'use strict';

var gulp = require('gulp');

var config = require('../config');

function copyTask() {

    return gulp
        .src([config.app.src + '/assets/**/**'])
        .pipe(gulp.dest(config.app.build + '/ui/assets'));
}

gulp.task('copy', copyTask);
module.exports = copyTask;
