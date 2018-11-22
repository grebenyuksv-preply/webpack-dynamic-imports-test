var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9002,
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin(),
		new WriteFilePlugin(),
	],
};
