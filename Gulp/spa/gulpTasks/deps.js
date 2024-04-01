const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const concact = require('gulp-concat')

function depsCSS()
{
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({"uglyComments": false}))
        .pipe(concact('deps.min.css'))
        .pipe(gulp.dest("build/assets/css"))
};
function depsHTML()
{
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
};

module.exports = 
{
    depsCSS, 
    depsHTML
};