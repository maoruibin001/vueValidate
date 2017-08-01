/**
 * Created by lenovo on 2017/7/31.
 */
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'babel-loader', include: path.resolve(__dirname,'./src/')},
            {test: /\.tpl$/, loader: 'string-loader'}
        ]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.common.js"
        },
    },

    plugins: [
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            inject: true
        })
    ]
}