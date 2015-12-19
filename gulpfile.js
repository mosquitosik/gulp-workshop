"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var Config = require('./gulpfile.config');

var config = new Config();
var allStyles = config.vendors.css.concat(config.app.css);

gulp.task('index', function () {
  return gulp.src(config.app.index)
              .pipe(gulp.dest('public'))
});

gulp.task('styles', function () {
  return gulp.src(allStyles)
              .pipe(concat('styles.css'))
              .pipe(gulp.dest('public'))
});

gulp.task('js', function(){
    return gulp.src(config.app.js)
              .pipe(concat('app.js'))
              .pipe(gulp.dest('public'))
});

gulp.task('vendors-js', function (){
    return gulp.src(config.vendors.js)
              .pipe(concat('vendors.js'))
              //.pipe(uglify())
              .pipe(gulp.dest('public'))
});

gulp.task('watch', ['build'], function () {
  watch(config.app.js, function () {
    gulp.start('js');
  });

  watch(config.app.index, function () {
    gulp.start('index');
  });

  watch(allStyles, function () {
    gulp.start('styles');
  });

  watch(config.app.js, function () {
    gulp.start('js');
  });

  watch(config.vendors.js, function () {
    gulp.start('vendors-js');
  })
})



gulp.task('build', ['index', 'styles', 'js', 'vendors-js']);
gulp.task('default', ['build']);
