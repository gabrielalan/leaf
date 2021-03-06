var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var defineModule = require('gulp-define-module');
var babel = require('gulp-babel');

gulp.task('handlebars:back', function () { 
	gulp.src('back/templates/**/*.html')
		.pipe(handlebars({handlebars: require('handlebars'), min: true}))
		.pipe(defineModule('commonjs'))
		.pipe(gulp.dest('back/templates/'));
});

gulp.task('handlebars:front', function () { 
	gulp.src('front/templates/**/*.html')
		.pipe(handlebars())
		.pipe(defineModule('commonjs'))
		.pipe(gulp.dest('front/js/Templates/'));
});

gulp.task('jsx', function () {
	gulp.src('front/jsx/**/*.jsx')
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('front/js'))
});

gulp.task('sass', function () {
	gulp.src('front/style/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('front/build/css'));
});

gulp.task('watch', function () {
	gulp.watch('back/templates/**/*.html', ['handlebars:back']);
	gulp.watch('front/templates/**/*.html', ['handlebars:front']);
	gulp.watch('front/style/**/*.scss', ['sass']);
	gulp.watch('front/jsx/**/*.jsx', ['jsx']);
});

gulp.task('default', ['jsx', 'handlebars:front', 'handlebars:back', 'sass']);