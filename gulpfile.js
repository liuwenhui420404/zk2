var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: '.',
            index: 'index.html'
        },
        files: ['src'],
        port: 9898,
        host: "localhost"
    })
})

gulp.task('default', ['server'])