var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var umd = require('gulp-umd');

//var del = require('del');


/**
 * 错误处理
 */
function error(event) {
    gutil.beep();
    gutil.log(event);
}

gulp.task('style', function () {
    return gulp.src('./test/*.less')
        .pipe(plumber({errorHandler: error}))
        .pipe(less())
        .pipe(concat('angular-wt-genius-min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('js', function () {
    return gulp.src(['./src/main.js', './src/*/*.js'])
        .pipe(plumber({errorHandler: error}))
        .pipe(concat('angular-wt-genius.js'))
        .pipe(umd({
            exports: function (file) {
                return 'wtGenius';
            },
            namespace: function (file) {
                return 'wtGenius';
            },
            dependencies: function (file) {
                return [
                    {
                        name: 'notify.js/dist/notify.js',
                        amd: 'notify.js/dist/notify.js',
                        cjs: 'notify.js/dist/notify.js',
                        global: 'Notify',
                        param: 'Notify'
                    }
                ];
            }
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('js-min', function () {
    return gulp.src(['./dist/angular-wt-genius.js'])
        .pipe(uglify())
        .pipe(concat('angular-wt-genius-min.js'))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['style', 'js', 'js-min']);