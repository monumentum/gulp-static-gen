const http = require('http');
const st = require('st');

module.exports = ({ server }) => {
    gulp.task('serve', ['watch'], done => {
        http.createServer(
            st({ path: `${process.cwd()}/${server.basePath}`, index: server.indexPath, cache: false })
        ).listen(server.port, () => {
            $.livereload.listen({ start: true, basePath: server.basePath });
            done();
        });
    });
}