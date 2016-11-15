'use strict';
const VueLoader = require('./vueLoader');

module.exports = function(source){
	
	this.cacheable();

	let entry = new VueLoader({
		resourcePath :  this.resourcePath
	});

	let filePath = entry.renderMarkdown(source)

	return 'module.exports = require(' +
		loaderUtils.stringifyRequest(this, '!!vue-loader!' + filePath) +
		');'
}


