export const copyFiles = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}
export const copyFileForm = () => {
  return app.gulp.src(app.path.src.jsFile)
    .pipe(app.gulp.dest(app.path.build.js))
}