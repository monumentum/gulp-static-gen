global.GULP_SUPPORTED_BROWSERS = global.GULP_SUPPORTED_BROWSERS || ["last 5 versions", "safari >= 7", "ie >= 10" ];

module.exports = {
    css: {
        sass: {},
        autoprefixer: GULP_SUPPORTED_BROWSERS
    },
    scripts: {
        config: {
            presets: [["env", {
                "targets": {
                    "browsers": GULP_SUPPORTED_BROWSERS,
                },
            }]]
        }
    },
    server: {
        port: 8080,
        basePath: 'dist',
    }
}