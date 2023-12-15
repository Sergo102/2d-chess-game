const {src, dest, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const sourcemaps = require("gulp-sourcemaps");