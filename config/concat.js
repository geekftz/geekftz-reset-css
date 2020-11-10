const { src, dest }  = require('gulp');
const gulpConcat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const chalkLog = require('../utils/chalkLog');


function concat(cb) {
	chalkLog('开始合并文件...', 'greenBright.bold');

	src(['styles/*.css', '!styles/*.min.css']) // 过滤 *.min.css
		.pipe(gulpConcat('reset.min.css'))
		.pipe(cleanCSS())
		.pipe(dest('dist'));
	
	chalkLog('合并完毕！', 'blueBright.bold');

	if (cb !== undefined) {
		cb()
	}
}

module.exports = concat