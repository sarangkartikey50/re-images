const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
              use: ['file-loader']
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './font/[hash].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader?limit=100000'
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, './sw.js'),
            excludes: [
              '**/.*',
              '**/*.map',
              '*.html',
            ],
            filename: 'sw.js'
        }),
        new ManifestPlugin({
            path: './src/manifest.json'
        })
    ]
}