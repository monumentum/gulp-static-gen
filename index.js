const fs = require('fs');
const baseConfig = require('./config');
const merge = require('lodash.merge');

const TASK_FOLDER = `${__dirname}/tasks`;

global.gulp = require('gulp');
global.$ = require('gulp-load-plugins')({
    rename: {
        "gulp-compile-handlebars": "handlebars"
    }
});

module.exports = userConfig => {
    const files = fs.readdirSync(TASK_FOLDER);
    const config = merge(baseConfig, userConfig);

    files
        .filter(name => !name.match(/^_/))
        .forEach(file => require(`${TASK_FOLDER}/${file}`)(config));
};