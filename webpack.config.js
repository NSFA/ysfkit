var path = require('path');

module.exports = {
	entry: "./docs/entry.js",
	output: {
		path: "./dist",
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