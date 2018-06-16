const { gulpDefault } = require('./_base');

module.exports = ({ move }) => {
    gulp.task('move', () => {
        move.forEach((entry) => {
            gulpDefault(entry.input)
                .pipe(gulp.dest(entry.output));
        });
    });
}