/**
 * minify css to '/dist'
 * author: hackftz
 * date: 2020-11-09
 */

const { src, dest }  = require('gulp');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const chalkLog = require('../utils/chalkLog');

function build(cb) {
	chalkLog('开始压缩...', 'greenBright.bold');

	src(['styles/*.css', '!styles/*.min.css']) // 过滤 *.min.css
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCSS())
		.pipe(dest('dist'));
	
	chalkLog('压缩完毕！', 'blueBright.bold');
	
	if (cb !== undefined) {
		cb()
	}
}

module.exports = build