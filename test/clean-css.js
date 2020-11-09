var CleanCSS = require('clean-css');
var input = 'a{font-weight:bold;}';
var options = { /* options */ };
var output = new CleanCSS(options).minify(input);
console.log("output", output)