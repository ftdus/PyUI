const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const gulpHeader = require('gulp-header');

gulp.task('compile', () =>
  gulp
    .src('./src/*.scss')
    .pipe(gulpHeader(`
    @import './base/mixins/config';\n
    @import './base/common/themes';\n
    @import './base/mixins/utils';\n
    @import './base/mixins/mixins';\n
  `))
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false,
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib')));

// gulp.task('copyfont', function() {
//   return gulp
//     .src('./src/fonts/**')
//     .pipe(cssmin())
//     .pipe(gulp.dest('./lib/fonts'));
// });

// gulp.task('build', ['compile', 'copyfont']);
gulp.task('build', ['compile']);
