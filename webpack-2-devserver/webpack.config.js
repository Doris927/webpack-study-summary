/**
 * Sourcemap是一个映射关系,报错时可以找到源文件
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	/**
	 * source-map会生成一个map文件
	 * inline-source-map 会生成在源文件内
	 * cheap只提示行，不提示列
	 * module还管别的loader
	 * eval性能较好，但是
	 * development最佳实践： cheap-module-eval-source-map
	 * production最佳实践: cheap-module-source-map
	 */
	devtool: 'cheap-module-eval-source-map',
	//可以打包多个文件
	entry: {
		main: './src/index.js',
	},
	/**
	 * contentBase: 服务器地址
	 * open: true 自动打开浏览器
	 * proxy 可以配置跨域代理
	 * port 可以配置端口号
	 */
	devServer:{
		contentBase: './dist',
		open: true
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
	// plugin可以在webpack运行到某个时刻的时候帮你做一些事情
	/**html-webpack-plugin
	 * 自动生成html文件，并自动引入bundle.js文件
	 * npm install html-webpack-plugin -D
	 */
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	}), 
	/**
	 * ClanWebpackPlugin
	 * 在打包之前自动清除dist文件夹下的目录
	 * npm install clean-webpack-plugin -D
	 */
	new CleanWebpackPlugin(),
],
	output: {
		//多个文件打包时，[name]占位
		//publicPath: 表示统一加的路径
		//publicPath:'/',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}