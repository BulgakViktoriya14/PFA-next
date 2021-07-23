var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
    gulp.src('./styles/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'));
});
