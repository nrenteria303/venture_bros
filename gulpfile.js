var gulp = require('gulp'),
browserSync = require('browser-sync').create();


gulp.task('watch-css', function() {
    return gulp.src('styles/*.css')
        .pipe(browserSync.stream());
});

gulp.task('watch-html', function() {
    return gulp.src('*.html')
        .pipe(browserSync.reload());
});

gulp.task('watch-js', function() {
    return gulp.src('scripts/*.js')
        .pipe(browserSync.reload());
});

gulp.task('watch-img', function() {
    return gulp.src('images/**')
        .pipe(browserSync.reload());
});

gulp.task('watch-fonts', function() {
    return gulp.src('fonts/**')
        .pipe(browserSync.reload());
});

gulp.task('default', function() {
    browserSync.init({
        server: {
                baseDir: "./"
        },
        notify: false
    });
    gulp.watch("styles/*.css", ["watch-css"]);
    gulp.watch("*.html", ["watch-html"]);
    gulp.watch("scripts/*.js", ["watch-js"]);
    gulp.watch("images/**", ["watch-img"]);
    gulp.watch("fonts/**", ["watch-fonts"]);
});
