const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');

var paths = {
  styles: {
    src: './app/scss/**/*.scss',
    dest: './build/css/'
  },
  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/'
  },
  images: {
    src: './app/images/**/*',
    dest: './build/images/'
  }
};

const clean = () => del(['./build']);

// Convert scss to css, auto-prefix and rename into styles.min.css
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        basename: 'styles',
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Minify all javascript files and concat them into a single app.min.js
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(terser())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Cache busting to prevent browser caching issues
const curTime = new Date().getTime();
function cacheBust() {
  return gulp
    .src('./app/index.html')
    .pipe(replace(/cb=\d+/g, 'cb=' + curTime))
    .pipe(gulp.dest('./build'));
}

// Watches all .scss, .js and .html changes and executes the corresponding task
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload);
  gulp.watch(paths.images.src, images).on('change', browserSync.reload);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
}

const build = gulp.series(
  clean,
  gulp.parallel(styles, scripts, images),
  cacheBust
);

const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.imagaes = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
