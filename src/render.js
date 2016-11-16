'use strict';

const VueLoader = require('./vueLoader');
const ejs = require('ejs');
const fse = require('fs-extra');
const path = require('path');

module.exports = function(componentPath, markdownPath, name){
	try{
		const file = require('./file.js')();

		let dir = path.resolve(__dirname, '../pages/');
		// copy
		file.copy(dir);

		// markdown file
		let entry = new VueLoader();
		file.createFile('content', entry.renderMarkdown(file.readFile(markdownPath)))

		// entry file
		let renderStr = ejs.render(file.readFile(path.resolve(__dirname, './template.ejs')), {
			name : name,
			path : componentPath
		});
		fse.outputFileSync(path.resolve(__dirname, '../docs/entry.js'), renderStr);

	}catch(err){
		console.error(err)
	}

}
