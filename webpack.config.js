var path = require('path');

module.exports = {
	entry: "./pages/entry.js",
	output: {
		path: "./dist",
		filename: "app.js"
	},
	resolveLoader: {
		root: path.join(__dirname, './node_modules'),
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
				test: /\.md$/,
				exclude: /node_modules/,
				loader: path.resolve(__dirname, './src/loader.js')
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
	vue: {
		loaders: {
			sass: "vue-style-loader!css-loader!sass"
		}
	}
};