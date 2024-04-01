const gulp = require('gulp');
const { series, parallel} = require('gulp');

const { appHTML, appJS, appCSS, appImg } = require('./gulpTasks/app');
const { depsCSS, depsHTML } = require('./gulpTasks/deps');
const { fileMonitor, server } = require('./gulpTasks/server');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appImg),
        series(depsCSS, depsHTML)
    ),
    server,
    fileMonitor
)