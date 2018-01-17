const { gulpDefault } = require('./_base');

module.exports = ({ scripts }) => {
    gulp.task('scripts', () => {
        gulpDefault(scripts.input)
            .pipe($.babel(scripts.config))
            .pipe($.uglify())
            .pipe(gulp.dest(scripts.output));
    });
};