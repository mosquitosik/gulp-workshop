"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var Config = require('./gulpfile.config');

var config = new Config();

gulp.task('index', function () {
  return gulp.src(config.app.index)
              .pipe(gulp.dest('public'))
});

gulp.task('styles', function () {
  return gulp.src(config.vendors.css.concat(config.app.css))
              .pipe(concat('styles.css'))
              .pipe(gulp.dest('public'))
});

gulp.task('js', function(){
    return gulp.src(config.app.js)
              .pipe(concat('app.js'))
              .pipe(gulp.dest('public'))
});

gulp.task('vendors-js', function(){
    return gulp.src(config.vendors.js)
              .pipe(concat('vendors.js'))
              .pipe(gulp.dest('public'))
})
