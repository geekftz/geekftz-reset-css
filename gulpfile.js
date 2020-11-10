const { series } = require('gulp');

const build = require('./config/build.js')
const watch = require('./config/watch.js')
const clean = require('./config/clean.js')
const concat = require('./config/concat.js')

exports.clean = clean
exports.watch = watch
exports.build = build
exports.concat = concat

exports.default = series(clean, build, concat, watch)
