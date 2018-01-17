const { gulpDefault } = require('./_base');

module.exports = ({ img }) => {
    gulp.task('images', () => {
        gulpDefault(img.input)
            .pipe($.imagemin(img.config))
            .pipe(gulp.dest(img.output));
    });
}