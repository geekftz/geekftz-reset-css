const { task, series } = require('gulp');
const build = require('./config/build.js')
const watch = require('./config/watch.js')


exports.build = build
exports.default = series(build, watch)
