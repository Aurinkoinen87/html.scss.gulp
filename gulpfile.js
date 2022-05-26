const { src, dest, watch, series, parallel } = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const del = require('del')


function styles(){
  return src([
    'app/scss/style.scss',
    'node_modules/swiper/swiper.scss',
    'node_modules/swiper/modules/pagination/pagination.scss'
    ])
  .pipe(scss({ outputStyle: 'compressed' }))
  .pipe(concat('style.min.css'))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 3 version'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function scripts(){
return src([
  'node_modules/swiper/swiper-bundle.js',
  'app/js/main.js'])
.pipe(concat('main.min.js'))
.pipe(uglify())
.pipe(dest('app/js'))
.pipe(browserSync.stream())
}


function images(){
  return src('app/img/**/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(dest('dist/img'))
}

function cleanDist(){
  return del('dist')
}

function watcher(){
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/*.html']).on('change', browserSync.reload)
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
}


function build(){
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/fonts/**/*',
    'app/*.html'
  ], {base: 'app'})
  .pipe(dest('dist'))
}


function browsersync(){
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}
exports.styles = styles
exports.scripts = scripts
exports.watcher = watcher
exports.browsersync = browsersync
exports.images = images

exports.build = series(cleanDist, images, build)
exports.default = parallel(styles, scripts, browsersync, watcher)