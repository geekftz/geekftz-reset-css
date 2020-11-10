/***
 * 用于监听css文件改动
 * author: hackftz
 * date: 2020-11-09
 */

const build = require('./build');
const chalkLog = require('../utils/chalkLog');
const gulpWatch = require('gulp-watch');
const clean = require('./clean');


function watch() {
	chalkLog('开始监听文件...')
	gulpWatch(['styles/*.css', '!styles/*.min.css'], function(e) {
		const start = e.path.indexOf('/styles')
		const path = e.path.slice(start)
		chalkLog(path + ' ' + e.event, 'redBright.bold')

		clean()
		build()
	});
}

module.exports = watch