var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var defineModule = require('gulp-define-module');

gulp.task('handlebars', function () { 
	gulp.src('front/templates/**/*.html')
		.pipe(handlebars())
		.pipe(defineModule('commonjs'))
		.pipe(gulp.dest('front/js/Templates/'));
});

gulp.task('watch', function () {
	watch('front/templates/**/*.html', batch(function (events, done) {
		gulp.start('handlebars', done);
	}));
});

gulp.task('default', ['build']);