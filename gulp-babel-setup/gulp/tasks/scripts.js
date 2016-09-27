var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var builder = require('systemjs-builder');


function babelTask () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));

	// systemJs stuff
	builder.buildSFX('main', 'dist/app.js', { config: 'systemBuild' })
		.then(function() {
			console.log('Build complete');
		})
		.catch(function(err) {
			console.log('Build error');
			console.log(err);
		});
}



gulp.task("babel", babelTask);
module.exports = babelTask;
