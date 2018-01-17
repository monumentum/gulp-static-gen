const { gulpDefault } = require('./_base');

module.exports = ({ hbs }) => {
    const config = {
        helpers: hbs.helpers,
        batch: hbs.batch,
    };

    gulp.task('handlebars', () => {
        if (!hbs.multiple) {
            hbs.multiple = [{
                input: hbs.input,
                output: hbs.output,
            }];
        }

        hbs.multiple.forEach(execHandleBars);
    });

    function execHandleBars({ input, output, data }) {
        const templateData  = Object.assign({}, hbs.data || {}, data);

        gulpDefault(input)
            .pipe($.handlebars(templateData, config))
            .pipe($.rename(output.name))
            .pipe(gulp.dest(output.dir))
    }
}