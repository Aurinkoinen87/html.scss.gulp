import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'


export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    scss: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    svg: `${srcFolder}/img/**/*.svg`,
    images: `${srcFolder}/img/**/*.{jpeg, jpg, png, webp, gif}`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}