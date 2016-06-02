var gulp = require('gulp');
var babel = require('gulp-babel');
var Server = require('karma').Server;


gulp.task('babel', function () {
return gulp.src(['./src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./build'));
});


gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
