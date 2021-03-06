/**
 * Created by admin on 2017/7/17.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index: './entry/CXGJ/index.js', 
        understand: './entry/CXGJ/understand.js', 
        subordinateCompany:"./entry/CXGJ/subordinateCompany.js"      //入口文件
    },
    output:{
        path: path.resolve("./build"), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath : '/build/',      //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].js',     //每个页面对应的主js的生成配置
        chunkFilename: 'js/[name].chunk.js'   //chunk生成的配置
    },
    devtool:"source-map",
    resolve:{
      alias:{
          'CXGJ':path.resolve(__dirname, 'modules/CXGJ')
      }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            { test: /\.html$/, loader: 'html-loader' },
            {test: /\.js$/, loader: 'babel-loader'},
            //{test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=../[path][name].[ext]?[hash]'},
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]?[hash]'},
            {test: /\.eot/, loader: 'file?prefix=font/'},
            {test: /\.woff/, loader: 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf/, loader: 'file?prefix=font/'},
            {test: /\.svg/, loader: 'file?prefix=font/'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        new ExtractTextPlugin('css/[name].css'),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['index'], //提取哪些模块共有的部分
           // minChunks: 7 // 提取至少3个模块共有的部分
        }),*/
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: './index.html', //生成的html存放路径，相对于path
            template: path.resolve(__dirname, 'modules/CXGJ/index/index.html'), //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
           // chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({ 
            filename: './understand.html', 
            template: path.resolve(__dirname, 'modules/CXGJ/understand/understand.html'), 
            inject: 'body', 
           // chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { 
                removeComments: false, 
                collapseWhitespace: false 
            }
        }),
        new HtmlWebpackPlugin({ 
            filename: './subordinateCompany.html', 
            template: path.resolve(__dirname, 'modules/CXGJ/subordinateCompany/subordinateCompany.html'), 
            inject: 'body', 
           // chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { 
                removeComments: false, 
                collapseWhitespace: false 
            }
        })
    ]
}