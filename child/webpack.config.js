var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ['en', 'fr'].map(LOCALE => ({
	entry: {
		main: path.join(__dirname, 'src'),
	},
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist', LOCALE),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist', LOCALE),
		compress: true,
		port: 9001,
	},
	plugins: [
		new webpack.DefinePlugin({
			LOCALE: JSON.stringify(LOCALE),
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin(),
		new WriteFilePlugin(),
	],
}));
