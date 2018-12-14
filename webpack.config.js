
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ConfigWebpackPlugin = require("config-webpack");
const webpack = require('webpack');
const path = require('path');
const config = require('config');

const publicPath = config.url.basepath;
const basepath = __dirname;
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
 mode: isProduction ? 'production' : 'development',
 context: path.join(basepath, "src"),
 resolve: {
   extensions: ['.js', '.ts', '.tsx', '.css','.less']
 },
 node: {
  fs: 'empty'
},
 entry: ['@babel/polyfill',
         './index.tsx'
        ],
 output: {
   path: path.join(basepath, 'dist'),
   filename: 'static/[name].[hash].js'
 },
 devtool: 'source-map',
 devServer: {
   contentBase: './dist', // Content base
   inline: true, // Enable watch and live reload
   host: 'localhost',
   port: 8080,
   stats: 'errors-only',
   historyApiFallback: true
 },
 module: {
   rules: [
     {
       test: /\.(ts|tsx)$/,
       exclude: /node_modules/,
       loader: 'awesome-typescript-loader',
       options: {
         useBabel: true,
         "babelCore": "@babel/core", // needed for Babel v7
       },
     },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, "css-loader"]
     },
     {
			test: /\.less$/,
			use: [{
        loader: 'style-loader', options: { attrs: { id: 'id' } }
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			}, {
				loader: 'less-loader',
				options: {
					sourceMap: true
				}
			}]
		},
     {
       test: /\.(png|jpg|jpeg|gif|svg)?$/,
       loader: 'url-loader',
       options: {
         limit: 8192,
         fallback: 'file-loader',
         mimetipe: 'image/[ext]',
         name: 'images/[name].[ext]'
       }
     },
  ],
 },
 plugins: [
   //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
     filename: 'index.html',
     template: 'index.html',
     hash: true,
   }),
   new MiniCssExtractPlugin({
     filename: "static/[name].css",
     chunkFilename: "[id].css"
   }),
   new webpack.HotModuleReplacementPlugin(),
   new ConfigWebpackPlugin(),
   new webpack.DefinePlugin({ 'process.env.NODE_CONFIG': JSON.stringify(JSON.stringify(config)) })
 ],
};