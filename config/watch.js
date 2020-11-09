/***
 * 用于监听css文件改动
 * author: hackftz
 * date: 2020-11-09
 */

const { watch: gulpWatch } = require('gulp')
const build = require('./build');
const chalkLog = require('../utils/chalkLog');


function watch() {
	chalkLog('开始监听文件...', '')
	gulpWatch(['styles/*.css', '!styles/*.min.css'], function(cb) {
		// body omitted
		build()
		cb()
	});
	// chalkLog('监听文件结束...')
}

module.exports = watch