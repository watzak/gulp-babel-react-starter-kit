var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');

gulp.task('build', function () {
    browserify({
        entries: './src/js/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('copyCSS', function () {
    return gulp.src('./src/styles/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('copyIndex', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('watchFiles', function () {
    gulp.watch('./src/js/**/*.jsx', []);
    gulp.watch('./src/styles/*.css', []);
    gulp.watch('./src/js/index.jsx', []);
});

gulp.task('default', ['build','copyIndex','copyCSS','browserSync','watchFiles']);