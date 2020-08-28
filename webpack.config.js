const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

<<<<<<< HEAD
=======

>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the `node_modules folder`
        use: [
<<<<<<< HEAD
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
=======
            {
            loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env"      
                ],
                plugins: [
                  "@babel/plugin-syntax-dynamic-import",
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
        ]
      },
      {
        test: /\.css$/i,
<<<<<<< HEAD
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          }, 'postcss-loader'
        ]
      },
=======
        use: [ 
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,{
              loader:'css-loader',
              options: {
                  importLoaders: 2
              } 
          }, 'postcss-loader'
            ]
        },
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
<<<<<<< HEAD
              name: "./images/[name].[ext]",
=======
                name: "./images/[name].[ext]",
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
              esModule: false
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
            }
          }
        ],
      },
<<<<<<< HEAD
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
=======
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]'
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
    }),
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};