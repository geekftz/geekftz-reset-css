const chalk = require('chalk');
const log = console.log;

function chalkLog(params, options = 'redBright') {
	let newLog = chalk

	options = options.split('.')

	for (let i = 0; i < options.length; i++) {
		const option = options[i];
		if (option) {
			newLog = newLog[option]
		}
	}

	log(newLog(params));
}

module.exports = chalkLog