var gulp = require('gulp')
var babel = require('gulp-babel')
var less = require('gulp-less')
var rename = require("gulp-rename");

gulp.task('css', () => {
  return gulp.src('./src/pages/**/*.less')
    .pipe(less())
    .pipe(rename({
      extname: ".wxss"
    }))
    .pipe(gulp.dest('./dest/pages'))
})

gulp.task('js', () => {
  return gulp.src('./src/pages/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dest/pages'))
})

gulp.task('html', () => {
  return gulp.src('./src/pages/**/*.html')
    .pipe(rename({
      extname: ".wxml"
    }))
    .pipe(gulp.dest('./dest/pages'))
})

gulp.task('json', () => {
  return gulp.src('./src/pages/**/*.json')
    .pipe(gulp.dest('./dest/pages'))
})

gulp.task('default', ['css', 'js', 'html', 'json'])


// watch

gulp.watch('./src/pages/**/*.less', ['css'])
gulp.watch('./src/pages/**/*.js', ['js'])
gulp.watch('./src/pages/**/*.html', ['html'])
gulp.watch('./src/pages/**/*.json', ['json'])

