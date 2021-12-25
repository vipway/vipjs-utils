const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './example/main.ts',
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	devServer: {
		static: path.join(__dirname, '../example/'),
		open: true,
		port: 9007,
		hot: true,
		host: 'localhost',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	]
}

