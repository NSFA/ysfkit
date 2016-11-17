'use strict';
const render = require('./render.js');
const path = require('path');
const webpack = require('./webpack.js');
const fse = require('fs-extra');
const fs = require('fs');

/**
 * ysfkit 主应用程序
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:46
 */

module.exports = function(options){
	options.path = path.resolve(process.cwd(), options.path);
	options.markdown = path.resolve(process.cwd(), options.markdown);
	options.workspace = options.workspace || path.resolve(process.cwd(),'./.docs/');
	options.outpath = options.outpath || process.cwd();
	render(options.path, options.markdown, options.name, options.workspace);

	webpack({
		workspace : options.workspace,
		outpath : options.outpath
	}, function(){
		fse.emptyDirSync(options.workspace);
		fs.rmdirSync(options.workspace)
	})
}