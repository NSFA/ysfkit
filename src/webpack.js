'use strict';
/**
 * webpack
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-11-18  上午9:35
 */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

var buildConfig = function(config){
	return {
		entry: path.resolve(config.workspace,"./entry.js"),
		output: {
			path: `${config.outpath}`,
			filename: "app.js"
		},
		module: {
			loaders: [
				{
					test: /\.vue$/,
					loader: 'vue'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel'
				},
				{
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test : /\.html/,
					loader : 'html'
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
					loader: 'file'
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
					loader: 'file',
					query: {
						name: '[name].[ext]?[hash]'
					}
				}
			]
		},
		resolve: {
			alias: {
				vue: 'vue/dist/vue.js'
			}
		},
		vue: {
			loaders: {
				scss: "vue-style-loader!css-loader!sass"
			}
		}
	};
};


module.exports = function(options, callback){
	let config = buildConfig(options);
	callback = callback || function(){}
	var compiler = webpack(config);
	compiler.run(function(err, stats){
		if(!err){
			console.log('file is created');
			callback();
		}
	})
}