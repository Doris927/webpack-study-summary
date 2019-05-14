const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 清除dist文件夹的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// webpack
const webpack = require('webpack');

module.exports = {
	mode:"development",
    entry: {
		index: './src/index.js'
		// login: './src/login.js'
	},
    output: {
        filename: '[name].js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
	},
	module: {
        rules: [
			//eslint
			{
                enforce: "pre",  //  代表在解析loader之前就先解析eslint-loader
                test: /\.js$/,
                exclude: /node_modules/,
                include:/src/,
                loader: "eslint-loader",
            },
			//解析CSS
            {
                test: /\.css$/,     // 解析css
                use: ['style-loader', 'css-loader'], // 从右向左解析
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
			},
			//解析sass
			{
                test: /\.scss$/,     // 解析scss
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
					use: 
					[
						{
							loader: 'css-loader',
							// options: {
							// 	importLoaders: 2,
							// 	modules: true //css样式模块化，避免样式冲突
							// }
						}, 
						'postcss-loader', 
						'sass-loader'
					] // 从右向左解析
                })
            },
			//解析图片
			{
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'   // 图片打包后存放的目录
                        }
                    }
                ]
			},
			//页面标签引用图片
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
			},
			//引用字体文件和svg文件
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
			},
			//es6
			{
                test:/\.js$/,
                use: 'babel-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            }
		]
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',   
            filename: 'index.html',
            chunks: ['vendor', 'index', 'utils']    // 对应关系,index.js对应的是index.html
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/login.html',
        //     filename: 'login.html',
        //     chunks: ['vendor', 'login', 'utils']    // 对应关系,login.js对应的是login.html
		// }),
		// 拆分后会把css文件放到dist目录下的css/style.css
		new ExtractTextWebpackPlugin('css/style.css'),
		new CleanWebpackPlugin()
	],
	resolve: {
        // 别名
        alias: {
          pages:path.join(__dirname,'src/pages'),
          common:path.join(__dirname,'src/common'),
		  store:path.join(__dirname,'src/store'),
		  images:path.join(__dirname,'src/images'),
		  iconfont:path.join(__dirname,'src/iconfont'),
		  'react-dom': '@hot-loader/react-dom'
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
	},
	optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                utils: {
                    // 抽离自己写的公共代码，utils里面是一个公共类库
                    chunks: 'initial',
                    name: 'utils',  //  任意命名
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
	},
	devServer: {
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        hotOnly: true, //不让浏览器自动刷新
        historyApiFallback: true
	},
	devtool: 'cheap-module-eval-source-map'
}