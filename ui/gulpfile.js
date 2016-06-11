var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var Server = require('karma').Server;
var browserSync = require('browser-sync');


gulp.task('bundle', function () {
    return browserify('./src/bundle.js', {debug: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));

});

gulp.task('babel', function () {
    return browserify('./src/main.js', {debug: true})
        .transform(babelify, { presets: ["es2015"] })
        .bundle()
        .on("error", function (err) { console.log("Error on babel task: " + err.message); })
        .pipe(source('./js/app.js'))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});


gulp.task('browser-sync', () => {
    browserSync.init(null, {
        server: './build',
        reloadDelay: 500
    });
    gulp.watch('./src/**/*.js', ['babel']);
    gulp.watch("build/*.html").on('change', browserSync.reload);
});


gulp.task('watch', function(){
    gulp.watch('./src/**/*.js', ['babel']);
});


gulp.task('build', ['bundle', 'babel']);
gulp.task('default', ['build', 'test']);