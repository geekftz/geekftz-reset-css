/**
 * 清理dist下css文件
 * author: hackftz
 * date: 2020-11-09
 */
const { src }  = require('gulp');
const gulpClean = require('gulp-clean');
const chalkLog = require('../utils/chalkLog');

function clean(cb) {
	chalkLog('清理dist文件夹')
	src('dist/*.css', {
		read: false
	})
		.pipe(gulpClean())

	cb()
}

module.exports = clean