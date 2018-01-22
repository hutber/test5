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
				test: /\.(jpg|png)$/,
				loader: 'url?limit=25000'
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
			},
			// Font Definitions
			{ test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=./font/[name].[ext]' },
			{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=./font/[name].[ext]' },
			{ test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=./font/[name].[ext]' },
			{ test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=./font/[name].[ext]' }
		]
	},
	cache: true
};
