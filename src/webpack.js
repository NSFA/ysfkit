'use strict';
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

var buildConfig = function(outdir){
	return {
		entry: path.resolve(__dirname, "../docs/entry.js"),
		output: {
			path: `${outdir}`,
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
					test: /\.md$/,
					exclude: /node_modules/,
					loader: path.resolve(__dirname, './loader.js')
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


module.exports = function(outdir){
	let config = buildConfig(outdir);
	var compiler = webpack(config);
	compiler.run(function(err, stats){
		if(!err){
			console.log('file is created');
		}
	})
}