var gulp = require('gulp')
var babel = require('gulp-babel')
var less = require('gulp-less')
var rename = require("gulp-rename")
var del = require('del')

gulp.task('css', () => {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(rename({
      extname: ".wxss"
    }))
    .pipe(gulp.dest('./dest'))
})

gulp.task('js', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dest'))
})

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(rename({
      extname: ".wxml"
    }))
    .pipe(gulp.dest('./dest'))
})

gulp.task('json', () => {
  return gulp.src('./src/**/*.json')
    .pipe(gulp.dest('./dest'))
})

gulp.task('clean', () => {
  del('./dest')
})

// Task: default

gulp.task('default', ['clean'], () => {
  return gulp.start('css', 'js', 'html', 'json')
})


// Task: watch

gulp.task('dev', () => {

  console.log('start development.')

  gulp.watch('./src/pages/**/*.less', ['css'])
  gulp.watch('./src/pages/**/*.js', ['js'])
  gulp.watch('./src/pages/**/*.html', ['html'])
  gulp.watch('./src/pages/**/*.json', ['json'])

})



