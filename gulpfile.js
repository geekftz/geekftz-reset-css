const { series } = require('gulp');

const build = require('./config/build.js')
const watch = require('./config/watch.js')
const clean = require('./config/clean.js')

exports.clean = clean
exports.watch = watch
exports.build = build

exports.default = series(clean, build, watch)
