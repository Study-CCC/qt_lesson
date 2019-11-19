const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'?'vue-style-loader':MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css',          
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: '8081',
        open: true,
        hot: true
    }
}