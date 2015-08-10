var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var rimraf = require('gulp-rimraf');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');

gulp.task('usemin', function () {
  return gulp.src('./src/index.html')
      .pipe(usemin({
        css: [minifyCss(), 'concat'],
        js_modernizer: [uglify(), rev()],
        js_libs: [uglify(), rev()]
      }))
      .pipe(gulp.dest('build/'));
});

gulp.task('clean', function () {
  return gulp.src('./build')
    .pipe(rimraf());
});

gulp.task('connect', function() {
  connect.server({
    root: './build',
    livereload: true,
    port: 9080
  });
});

gulp.task('reload', function () {
  return gulp.src('./build')
    .pipe(connect.reload());
});

gulp.task('build', ['clean', 'usemin']);

gulp.task('watch', function () {
  gulp.watch(['./src/**/*'], ['build']);
  gulp.watch(['./build/**/*'], ['reload']);
});


gulp.task('livereload', ['connect', 'watch']);
