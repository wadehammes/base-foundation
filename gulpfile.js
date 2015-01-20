/* DEPENDENCIES */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');


/* PATHS */
// Style Path
var stylePathSrc = './scss/**/*.scss';
var stylePathDest = './www/css/';

// Script Path
var scriptsPathSrc = ['./js/vendor/*.js', './js/svg.js', './js/app/app.js'];
var scriptsPathWatch = './js/**/*.js';
var scriptsPathDest = './www/js/';

// Image Path
var imgPathWatch = './assets/img/*';
var imgDest = './www/img';


/* TASKS */
gulp.task('sass', function() {
  return gulp.src(stylePathSrc)
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(stylePathDest))
});

gulp.task('scripts', function() {
  return gulp.src(scriptsPathSrc)
    .pipe(concat('app.js', {newLine: ';'}))
    .pipe(gulp.dest(scriptsPathDest))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(scriptsPathDest))
});

gulp.task('img-opt', function () {
  return gulp.src(imgPathWatch)
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest(imgDest));
});

gulp.task('watch', function() {
  gulp.watch(stylePathSrc, ['sass']);
  gulp.watch(scriptsPathWatch, ['scripts']);
  gulp.watch(imgPathWatch, ['img-opt']);
});

/* RUN */
gulp.task('default', ['sass', 'scripts', 'watch']);
gulp.task('images', ['img-opt',]);
