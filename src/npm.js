'use strict';
const exec = require('child_process').exec;

let dep = require('../package.json').dependencies;
let depList = Object.keys(dep);

function run(cmd){
	var child = exec(cmd, function (error, stdout, stderr) {
		if (stderr !== null) {
			console.log('' + stderr);
		}
		if (stdout !== null) {
			console.log('' + stdout);
		}
		if (error !== null) {
			console.log('' + error);
		}
	});
}

module.exports = function(deps){
	if(deps){
		run('npm install '+deps);
	}else{
		run('cnpm install '+depList.join(' ')+'-g');
	}

}
