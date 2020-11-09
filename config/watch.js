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

		if (e.event !== 'change') { // 非文件改动，则先清理dist文件下所有css文件
			clean()
		}

		build()
	});
}

module.exports = watch