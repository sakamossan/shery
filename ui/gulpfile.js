var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var Server = require('karma').Server;
var sass = require('gulp-sass');


gulp.task('bundle', () => {
    return browserify('./src/js/bundle.js', {debug: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('babel', () => {
    return browserify('./src/js/main.js', {debug: true})
        .transform(babelify, { presets: ["es2015"] })
        .bundle()
        .on("error", (err) => {
            console.log("Error on babel task: " + err.message);
            this.emit("end");
        })
        .pipe(source('./js/app.js'))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('css', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .on('error', (err) => {
      console.log(err.message);
    })
    .pipe(gulp.dest('./build/'))
});


gulp.task('test', (done) => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});


gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', ['babel']);
    gulp.watch('./src/**/*.scss', ['css']);
});


gulp.task('build', ['bundle', 'babel']);
gulp.task('default', ['build', 'test']);