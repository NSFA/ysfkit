'use strict';

const VueLoader = require('./vueLoader');
const ejs = require('ejs');
const fse = require('fs-extra');
const path = require('path');

module.exports = function(componentPath, markdownPath, name, workspace){
	try{
		const file = require('./file.js')({
			workspace : workspace
		});

		let source = path.resolve(__dirname, '../pages/');
		// copy
		file.copy(source);

		// markdown file
		let entry = new VueLoader();
		file.createFile('content', entry.renderMarkdown(file.readFile(markdownPath)))

		// entry file
		let renderEntry = ejs.render(file.readFile(path.resolve(__dirname, './ejs/template.ejs')), {
			name : name,
			path : componentPath
		});
		
		fse.outputFileSync(path.resolve(workspace, './entry.js'), renderEntry);

		// index file
		let renderHtml = ejs.render(file.readFile(path.resolve(__dirname, './ejs/index.ejs')), {
			name : name
		});

		fse.outputFileSync(path.resolve(process.cwd(), './index.html'), renderHtml);

	}catch(err){
		console.error(err)
	}

}
