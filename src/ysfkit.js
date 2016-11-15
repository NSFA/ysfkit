'use strict';
const render = require('./render.js');
const path = require('path');
const webpack = require('./webpack.js');

/**
 * ysfkit 主应用程序
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:46
 */

module.exports = function(options){
	options.path = path.resolve(process.cwd(), options.path);
	options.markdown = path.resolve(process.cwd(), options.markdown);
	
	render(options.path, options.markdown, options.name);
	webpack(process.cwd())
}