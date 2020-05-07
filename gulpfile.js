const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
let babel = require('gulp-babel')
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return gulp.src('./src/scripts/js/**')
    .pipe(concat('script.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./src/scripts'))
    .pipe(browserSync.stream())
}

function clean() {
  return del(['src/scripts/*.js'])
}

function watch() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

  gulp.watch('./src/scss/**/*.scss', styles)
  gulp.watch('./src/scripts/js/**/*.js', scripts)
  gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('start', gulp.series('build', 'watch'));
