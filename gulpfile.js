const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixes = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

//dev сборка

const devClean = () => {
  return del(['dev']);
};

const devSass = () => {
  return src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(sourcemaps.write("."))
    .pipe(dest("dev/css"))
    .pipe(browserSync.stream());;
}

const devFonts = () => {
  return src('src/fonts/**/*')
    .pipe(dest('dev/fonts'))
}

const devHtmlMinify = () => {
  return src('src/**/*.html')
    .pipe(dest('dev'))
    .pipe(browserSync.stream())
}

const devSvgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(dest('dev/images/svg'))
}

const devImages = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
    .pipe(dest('dev/images'))
}

const devScripts = () => {
  return src([
    'src/js/components/*.js',
  ])
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest('dev/js'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dev'
    }
  })
}

watch('src/**/*.html', devHtmlMinify);
watch('src/images/svg/**/*.svg', devSvgSprites)
watch('src/js/**/*.js', devScripts)
watch('src/css/**/*.scss', devSass)


const buildClean = () => {
  return del(['build']);
};

const buildStyles = () => {
  return src('src/css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('build/css'))
};

const buildFonts = () => {
  return src('src/fonts/**/*')
    .pipe(dest('build/fonts'))
}

const buildHtmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('build'))
}

const buildSvgSprites = () => {
  return src('src/images/svg/*.svg')
    .pipe(dest('build/images/svg'))
}

const buildScripts = () => {
  return src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('build/js'))
}

const buildImages = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
    .pipe(image())
    .pipe(dest('build/images'))
}

exports.devClean = devClean
exports.buildClean = buildClean

exports.build = series(buildClean, buildHtmlMinify, buildScripts, buildFonts, buildStyles, buildImages, buildSvgSprites)
exports.dev = series(devClean, devHtmlMinify, devFonts, devScripts, devSass, devImages, devSvgSprites, watchFiles)
