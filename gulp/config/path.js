// Получаем имя папки проекта
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;


export const path = {
  build: {
    js: `${buildFolder}/js/`,
    libsJs: `${buildFolder}/js/libs/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    jsFile: `${srcFolder}/js/form.js`,
    libsJs: `${srcFolder}/js/libs/**/*.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/**/*.html`, //.pug 
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/*.*`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    jsFile: `${srcFolder}/js/form.js`,
    scss: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`, //.pug
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}