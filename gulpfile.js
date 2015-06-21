/* DEPENDENCIES */
var gulp     = require('gulp'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifyCSS    = require('gulp-minify-css'),
concat       = require('gulp-concat'),
uglify       = require('gulp-uglify'),
rename       = require('gulp-rename'),
svgmin       = require('gulp-svgmin'),
imagemin     = require('gulp-imagemin'),
livereload   = require('gulp-livereload'),
notify       = require("gulp-notify"),
util         = require('gulp-util'),
watch        = require('gulp-watch'),
streamqueue  = require('streamqueue'),
plumber      = require('gulp-plumber');

/* PATHS */
var devBase          = './assets';
var themeBase        = './www';

// Style Path
var stylePathSrc     = devBase + '/scss/**/*.scss';
var stylePathDest    = themeBase + '/css/';

// Script Path
var scriptsPathSrc   = [devBase + '/js/_lib/**/*.js', devBase + '/js/_src/**/*.js', devBase + '/js/app.js'];
var scriptsPathWatch = devBase + '/js/**/*.js';
var scriptsPathDest  = themeBase + '/js/';

// Sprites Path
var svgPathWatch     = devBase + '/svg/*.svg';
var svgDest          = themeBase + '/svg';

// Image Path
var imgPathWatch     = devBase + '/img/*';
var imgDest          = themeBase + '/img';

// PHP Paths
var phpPath          = themeBase + '/**/*.php';

// Copy all files from Bower we need
gulp.task('copy', function() {
  gulp.src([
    /* add bower src files here */
    ])
  .pipe(gulp.dest(devBase + '/js/_lib/'));
});

// Compile, prefix, minify and move our SCSS files
gulp.task('sass', function() {
  return gulp.src(stylePathSrc)
  .pipe(plumber())
  .pipe(sass({
    style: 'expanded',
    errLogToConsole: true
    }))
  .pipe(autoprefixer('last 4 versions', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(minifyCSS())
  .pipe(gulp.dest(stylePathDest))
  .pipe(livereload({start: true}))
  .pipe(notify({ message: 'Styles task complete' }));
});

// Compile (in order), concatenate, minify, rename and move our JS files
gulp.task('scripts', function() {
  return streamqueue({ objectMode: true },
    gulp.src(devBase + '/js/_lib/**/*.js'),
    gulp.src(devBase + '/js/_src/**/*.js'),
    gulp.src(devBase + '/js/app.js')
    )
  .pipe(plumber())
  .pipe(concat('app.js', {newLine: ';'}))
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest(scriptsPathDest))
  .pipe(livereload({start: true}))
  .pipe(notify({ message: 'Scripts task complete' }));
});

// Optimize images
gulp.task('img-opt', function () {
  return gulp.src(imgPathWatch)
  .pipe(imagemin({
    progressive: true
    }))
  .pipe(gulp.dest(imgDest))
  .pipe(notify({ message: 'Images task complete' }));
});

// Optimize our SVGS
gulp.task('svg-opt', function () {
  return gulp.src(svgPathWatch)
  .pipe(svgmin({
    plugins: [
    {removeEmptyAttrs: false},
    {removeEmptyNS: false},
    {cleanupIDs: false},
    {unknownAttrs: false},
    {unknownContent: false},
    {defaultAttrs: false},
    {removeTitle: true},
    {removeDesc: true},
    {removeDoctype: true}
    ],
    }))
  .pipe(gulp.dest(svgDest))
  .pipe(notify({ message: 'SVG task complete' }));
});

// Watch for any task changes
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(phpPath).on('change', function(file) {
    livereload.changed(file.path);
    util.log(util.colors.blue('PHP file changed' + ' (' + file.path + ')'));
    });

  gulp.watch(stylePathSrc, ['sass']);
  gulp.watch(scriptsPathWatch, ['scripts']);
  gulp.watch(svgPathWatch, ['svg-opt']);
  gulp.watch(imgPathWatch, ['img-opt']);
});

/* RUN */
gulp.task('default', ['copy', 'sass', 'scripts', 'watch']);
gulp.task('images', ['img-opt']);
gulp.task('svg', ['svg-opt']);
