const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const configBabel = 
{
    comments: false,
    presets: ["env"]
}

function buildFuncJs(callback)
{
    gulp.src('src/**/*.js')
        .pipe(babel(configBabel))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'))
        .on('error', err => console.log(err))

    return callback()
};

exports.default = series(buildFuncJs);