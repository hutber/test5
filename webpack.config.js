/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates

		'./src/index.js'
	],
	devServer: {
		contentBase: [
			'demo/'
		],
		historyApiFallback: true,
		host: '0.0.0.0',
		publicPath: '/dist/'
	},
	output: {
		filename: 'main.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	devtool: 'eval',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				BABEL_ENV: JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /dashjs\/dist\/.*/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules\/.*/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader?sourceMap',
						query: {
							modules: true,
							sourceMap: true,
							url: false,
							importLoaders: 2
						}
					},
					'postcss-loader?sourceMap&parser=postcss-scss'
				],
			}
		]
	},
	cache: true
};
