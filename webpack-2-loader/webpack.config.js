const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module:{
		rules: [{
			// *** file-loader ******
			// npm install file-loader -D
			// test: /\.(jpg|png|gif)$/,
			// use: {
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '[name]_[hash].[ext]', //保持和原来文件相同
			// 		outputPath: 'images/' //打包时候的文件夹
			// 	}
			// }
			//
			//*** url- loader 可以把图片打包成base64的字符串 */
			// npm install url-loader -D
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]', //保持和原来文件相同
					outputPath: 'images/', //打包时候的文件夹
					limit: 10240,//如果文件大小小于2048个字节，就转成字符串，否则就和file-loader一样去进行打包
				}
			}
		},
		{
			/**
			 * css loader会将所有的CSS文件合并
			 * style-loader 将css-loader获得的样式挂载到页面的head部分
			 * npm install style-loader css-loader -D
			 */
			// test: /\.(css)$/,
			// use: ['style-loader', 'css-loader']
			//*********************************** */
			/**
			 * sass-loader将scss文件load下来
			 * npm install sass-loader node-sass -D
			 */
			test: /\.(scss)$/,
			use: [//loader的执行顺序，从下到上，从右边到左边
				'style-loader', 
				'css-loader', 
				// {
				// 	loader: 'css-loader',
				// 	options: {
				// 		importLoaders: 2,
				// 		modules: true //css样式模块化，避免样式冲突
				// 	}
				// },
				'sass-loader'
			]
		},
		{
			//*** file- loader打包字体文件 */
			// npm install url-loader -D
			test: /\.(eot|ttf|svg|woff)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name]_[hash].[ext]', //保持和原来文件相同
					outputPath: 'iconfont/' //打包时候的文件夹
				}
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}