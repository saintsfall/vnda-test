const gulp = require('gulp');

const pug = require('gulp-pug');
const htmlMin = require('gulp-htmlmin');

const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Compile HTML
function html() {
    return gulp
        .src('./src/index.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'));
}

function htmlPug() {
    return gulp
        .src('./src/**/*.pug', 
            {
                base: 'src'
            }
        )
        .pipe(pug(
            {
                pretty: true
            }
        ))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

//Compile SASS/SCSS
function compileSass() {
    let plugins = [
        cssnano(),
        autoprefixer({browsers: ['last 2 versions']}),


    ]

    return gulp
        .src('./src/assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
}

// Watch
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('./src/index.html', html);
    gulp.watch('./src/index.html').on('change', browserSync.reload);
    gulp.watch('./src/assets/sass/**/*.scss', compileSass);
}

// Exporting tasks
exports.html = html;
exports.sass = compileSass;
exports.w = watch;