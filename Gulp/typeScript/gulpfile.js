 const gulp = require('gulp');
 const { series } = require('gulp');
 const ts = require('gulp-typescript');
 const tsProject = ts.createProject('tsconfig.json');

 function buildFuncJs()
 {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
 };

 exports.default = series(buildFuncJs);