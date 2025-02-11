// Основной модуль
import gulp from "gulp";
import concat from "gulp-concat";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js, libsJs } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fontsStyle } from "./gulp/tasks/fonts.js";
import { copyFiles, copyFileForm } from "./gulp/tasks/copy.js";

// Наблюдатель за изменениями в файлах
function watcherDev() {
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.jsFile, copyFileForm);
  gulp.watch(path.watch.html, { delay: 0 }, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.images, images);
  gulp.series(libsJs);
}
function watcherDevLite() {
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.html, { delay: 0 }, html);
  gulp.watch(path.watch.scss, scss);
  gulp.series(libsJs);
}

// Последовательная обработака шрифтов
const fonts = gulp.series(fontsStyle);

// Основные задачи
const mainTasksDev = gulp.series(gulp.parallel(fonts, js, libsJs, html, scss, images, copyFiles, copyFileForm));
const mainTasksDevLite = gulp.series(gulp.parallel(js, libsJs, html, scss));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasksDev, gulp.parallel(watcherDev, server));
const build = gulp.series(reset, mainTasksDev);

//Быстрая сборка {запуск gulp devLite, gulp devAssets }
const devLite = gulp.series(reset, mainTasksDevLite, gulp.parallel(watcherDevLite, server));
const devAssets = gulp.series(libsJs, fonts, gulp.series(images));

// Экспорт сценариев
export { dev };
export { devLite };
export { build };
export { devAssets };

gulp.task("scripts", function () {
  return gulp.src([`./src/js/app.js`]).pipe(concat("app.js")).pipe(gulp.dest("./dist/js/"));
});

// Выполнение сценария по умолчанию
gulp.task("default", dev);
