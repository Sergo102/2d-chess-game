const {src, watch, dest, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const sourcemaps = require("gulp-sourcemaps");
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function scssTask(){
  return src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function jsTask(){
  return src('app/js/**/*.js')
    .pipe(sourcemaps.write())
      .pipe(babel({
        presets: ['@babel/preset-env']
      }))
      .pipe(concat('index.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    // .pipe(dest('dist/js'));
}

function browserSyncServe(cb){
  browserSync.init({
    server: {
      baseDir: "./",
      index: "app/html/index.html"
    }
  });
  cb(); 
}

function browserSyncReload(cb){
  browserSync.reload();
  cb();
}

function watcher(){
  watch('app/html/**/*.html', browserSyncReload);
  watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browserSyncReload));
}

exports.default = series(scssTask, jsTask, browserSyncServe, watcher);