const { gulpDefault } = require('./_base');

module.exports = ({ css }) => {
    gulp.task('sass', () => {
        gulpDefault(css.input)
            .pipe($.sass(css.config))
            .pipe($.autoprefixer(css.autoprefixer))
            .pipe($.cssnano())
            .pipe(gulp.dest(css.output));
    });
}