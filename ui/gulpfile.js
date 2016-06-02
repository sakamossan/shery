var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var Server = require('karma').Server;


gulp.task('babel', function () {
    return browserify('./src/app.js', {debug: true})
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error on browserify: " + err.message); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build'));
});


gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});


gulp.task('default', ['babel', 'test']);