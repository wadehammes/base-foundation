var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(watch('./scss/**/*.scss'))
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/css'))
});

gulp.task('js', function() {
  return gulp.src('./js/**/*.js')
    .pipe(watch('./js/**/*.js'))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/js'))
});

gulp.task('default', ['sass', 'js']);
