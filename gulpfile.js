'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('gulpTasks', function () {
   return gulp.src('./src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(cssnano())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/css/'))
});gulp.task('watch', function() {
   gulp.watch('./src/scss/**/*.scss', gulp.series('gulpTasks'));
});