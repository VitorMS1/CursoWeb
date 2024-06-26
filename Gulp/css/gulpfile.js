const gulp = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function buildFuncCSS()
{
    return gulp.src("src/sass/index.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglycomment": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
};

function buildFuncHTML()
{
   return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
};

exports.default = parallel(buildFuncCSS, buildFuncHTML);