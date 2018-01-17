module.exports = config => {
    gulp.task('watch', ['build'], () => {
        gulp.watch(config.hbs.watch || config.hbs.input, ['handlebars']);
        // gulp.watch(config.sass.watch || config.sass.input, ['sass']);
        gulp.watch(config.scripts.watch || config.scripts.input, ['scripts']);
        // gulp.watch(config.images.watch || config.images.input, ['images']);
    });
}