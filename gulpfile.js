'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpReplacePath = require('gulp-replace-path');

const distDirectory = 'dist';
const htmlBlob = 'src/*.html';
const imagesBlob = 'src/images/**';
const fontsBlob = 'src/fonts/**';
const stylesBlob = 'src/styles/**';
const jsBlob = 'src/scripts/**';

const { series, parallel } = gulp;

gulp.task('cleanDist', function() {
  return gulp.src(distDirectory, { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task('processHtml', function() {
  return gulp.src(htmlBlob)
    .pipe(gulp.dest(distDirectory));
});

gulp.task('processImages', function() {
  return gulp.src(imagesBlob)
    .pipe(gulp.dest(`${distDirectory}/images/`));
});

gulp.task('processFonts', function() {
  return gulp.src(fontsBlob)
    .pipe(gulp.dest(`${distDirectory}/fonts/`));
});

gulp.task('processStyles', function() {
  return gulp.src(stylesBlob)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulpReplacePath(/(?:\.\.\/){2,}images/g, '../images'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${distDirectory}/styles`))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('processJs', function() {
  return gulp.src(jsBlob)
    .pipe(gulp.dest(`${distDirectory}/scripts/`));
});

gulp.task('build', series(
  'cleanDist',
  parallel(
    'processStyles',
    'processHtml',
    'processImages',
    'processFonts',
    'processJs',
  )
));

gulp.task('serve', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: distDirectory,
    },
    port: 8080,
  });

  gulp.watch(htmlBlob, series('processHtml'))
    .on('change', browserSync.reload);

  gulp.watch(imagesBlob, series('processImages'))
    .on('change', browserSync.reload);

  gulp.watch(fontsBlob, series('processFonts'))
    .on('change', browserSync.reload);

  gulp.watch(stylesBlob, series('processStyles'));

  gulp.watch(jsBlob, series('processJs'))
    .on('change', browserSync.reload);
});

gulp.task('default', series('build', 'serve'));
