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
        subordinateCompany:"./entry/CXGJ/subordinateCompany.js" ,     //入口文件
        //酒店管理
        'ht-index': './entry/Hotel/ht-index.js',
        'ht-contactUs':'./entry/Hotel/ht-contactUs.js',
        'ht-managementKnowledge':'./entry/Hotel/ht-managementKnowledge.js',
        'ht-hotelFell':'./entry/Hotel/ht-hotelFell.js',
        'ht-aboutUs':'./entry/Hotel/ht-aboutUs.js',
        'ht-article':"./entry/Hotel/ht-article.js",
        //环宇培训
        'hy-index':'./entry/Huanyu/hy-index.js',
        'hy-form':'./entry/Huanyu/hy-form.js',
        'hy-about':'./entry/Huanyu/hy-about.js',
        'hy-articles':'./entry/Huanyu/hy-articles.js',
        'hy-picture':'./entry/Huanyu/hy-picture.js',
        'hy-article':'./entry/Huanyu/hy-article.js',
        //了然文化传播
        'lr-articles':'./entry/Leran/lr-articles.js',
        'lr-index':'./entry/Leran/lr-index.js',
        'lr-article':'./entry/Leran/lr-article.js',
        'lr-aboutUs':"./entry/Leran/lr-aboutUs.js",
        'lr-product':'./entry/Leran/lr-product.js'
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
          'CXGJ':path.resolve(__dirname, 'modules/CXGJ'),
          'Hotel':path.resolve(__dirname,'modules/Hotel'),
          'Huanyu':path.resolve(__dirname,'modules/Huanyu'),
          'modules':path.resolve(__dirname,'modules'),
          'Leran':path.resolve(__dirname,'modules/Leran')
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

        /*********创新工匠公有模块************/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['index','understand','subordinateCompany'], //提取哪些模块共有的部分
           // minChunks: 7 // 提取至少3个模块共有的部分
        }),

        /*********酒店管理公有模块************/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ht-vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['ht-index','ht-contactUs','ht-managementKnowledge','ht-hotelFell','ht-aboutUs','ht-article'], //提取哪些模块共有的部分
            // minChunks: 7 // 提取至少3个模块共有的部分
        }),
        /********环宇培训共有模块***************/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'hy-vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['hy-index','hy-form','hy-about','hy-articles','hy-picture','hy-article'], //提取哪些模块共有的部分
            // minChunks: 7 // 提取至少3个模块共有的部分
        }),
        /********了然文化ia共有模块***************/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lr-vendors', // 将公共模块提取，生成名为`vendors`的chunk
<<<<<<< HEAD
            chunks: ['lr-articles','lr-index','lr-article','lr-aboutUs'], //提取哪些模块共有的部分
=======
            chunks: ['lr-articles','lr-index','lr-article','lr-product'], //提取哪些模块共有的部分
>>>>>>> c25aab3aa6734ace52af0fd89e41e7addb9698fe
            // minChunks: 7 // 提取至少3个模块共有的部分
        }),

        /*********创新工匠模块************/
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            //favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: './index.html', //生成的html存放路径，相对于path
            template: path.resolve(__dirname, 'modules/CXGJ/index/index.html'), //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            chunks: ['vendors', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({ 
            filename: './understand.html', 
            template: path.resolve(__dirname, 'modules/CXGJ/understand/understand.html'), 
            inject: 'body', 
            chunks: ['vendors', 'understand'],
            minify: { 
                removeComments: false, 
                collapseWhitespace: false 
            }
        }),
        new HtmlWebpackPlugin({ 
            filename: './subordinateCompany.html', 
            template: path.resolve(__dirname, 'modules/CXGJ/subordinateCompany/subordinateCompany.html'), 
            inject: 'body', 
            chunks: ['vendors', 'subordinateCompany'],
            minify: { 
                removeComments: false, 
                collapseWhitespace: false 
            }
        }),

        /************酒店管理*************/
        new HtmlWebpackPlugin({
            filename: './ht-index.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-index/ht-index.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-index'],
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './ht-hotelFell.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-hotelFell/ht-hotelFell.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-hotelFell'],
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './ht-contactUs.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-contactUs/ht-contactUs.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-contactUs'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './ht-managementKnowledge.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-managementKnowledge/ht-managementKnowledge.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-managementKnowledge'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './ht-aboutUs.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-aboutUs/ht-aboutUs.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-aboutUs'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './ht-article.html',
            template: path.resolve(__dirname, 'modules/Hotel/ht-article/ht-article.html'),
            inject: 'body',
            chunks: ['ht-vendors', 'ht-article'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        /***************环宇培训*****************/
        new HtmlWebpackPlugin({
            filename: './hy-index.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-index/hy-index.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './hy-form.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-form/hy-form.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-form'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './hy-about.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-about/hy-about.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-about'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './hy-articles.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-articles/hy-articles.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-articles'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './hy-picture.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-picture/hy-picture.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-picture'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './hy-article.html',
            template: path.resolve(__dirname, 'modules/Huanyu/hy-article/hy-article.html'),
            inject: 'body',
            chunks: ['hy-vendors', 'hy-article'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        /********************了然文化*******************/
        new HtmlWebpackPlugin({
            filename: './lr-articles.html',
            template: path.resolve(__dirname, 'modules/Leran/lr-articles/lr-articles.html'),
            inject: 'body',
            chunks: ['lr-vendors','lr-articles'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './lr-index.html',
            template: path.resolve(__dirname, 'modules/Leran/lr-index/lr-index.html'),
            inject: 'body',
            chunks: ['lr-vendors','lr-index'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './lr-article.html',
            template: path.resolve(__dirname, 'modules/Leran/lr-article/lr-article.html'),
            inject: 'body',
            chunks: ['lr-vendors','lr-article'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
<<<<<<< HEAD
            filename: './lr-aboutUs.html',
            template: path.resolve(__dirname, 'modules/Leran/lr-aboutUs/lr-aboutUs.html'),
            inject: 'body',
            chunks: ['lr-vendors','lr-aboutUs'],//需要引入的chunk，不配置就会引入所有页面的资源
=======
            filename: './lr-product.html',
            template: path.resolve(__dirname, 'modules/Leran/lr-product/lr-product.html'),
            inject: 'body',
            chunks: ['lr-vendors','lr-product'],//需要引入的chunk，不配置就会引入所有页面的资源
>>>>>>> c25aab3aa6734ace52af0fd89e41e7addb9698fe
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        })
    ]
}