module.exports = config => {
    gulp.task('watch', ['build'], () => {
        gulp.watch(config.hbs.watch || config.hbs.input, ['handlebars']);
        gulp.watch(config.css.watch || config.css.input, ['sass']);
        gulp.watch(config.scripts.watch || config.scripts.input, ['scripts']);
        gulp.watch(config.img.watch || config.img.input, ['images']);
    });
}