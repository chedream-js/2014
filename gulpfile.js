var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
    gulp.src([
        'bower_components/angular-loading/angular-loading.css',
        'bower_components/angular-carousel/dist/angular-carousel.css',
        'styles/*.css'
    ])
        .pipe(concatCss('style.css'))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('static/css/'));
});
