const gulp = require('gulp');
const webserver = require('gulp-webserver');
const {watch} = require('gulp');

function fileMonitor()
{
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
};
function server(callback)
{
    watch('src/**/*.html', gulp.series("appHTML"))
    watch('src/**/**/*.js', gulp.series("appJS"))
    watch('src/**/**/*.scss', gulp.series("appCSS"))
    watch('src/assets/imgs/*', gulp.series("appImg"))
    return callback()
};

module.exports = 
{
    fileMonitor,
    server
};