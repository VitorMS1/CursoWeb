const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass')(require('node-sass'));
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');

function appHTML()
{
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
};
function appJS()
{
    return gulp.src('src/assets/js/*')
        .pipe(babel({comments: true, presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
};
function appCSS()
{
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(gulp.dest('build/assets/css'))
};
function appImg()
{
    return gulp.src('src/assets/imgs/*')
        .pipe(gulp.dest('build/assets/imgs'))
};

gulp.task('appHTML', appHTML);
gulp.task('appJS', appJS);
gulp.task('appCSS', appCSS);
gulp.task('appImg', appImg);

module.exports = 
{
    appHTML,
    appJS,
    appCSS,
    appImg
};