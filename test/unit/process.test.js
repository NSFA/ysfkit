'use strict';
const exec = require('child_process').exec;



run('cnpm install ui-style -g');

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