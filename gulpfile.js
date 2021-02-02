const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// for css
function style(){
// scss file
return gulp.src('./scss/**/*.scss')
// pass to sass compiler
.pipe(sass())
// compiled css
.pipe(gulp.dest('./css'))
// for all browsers
.pipe(browserSync.stream())
}
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;