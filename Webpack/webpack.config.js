const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPuligin = require('mini-css-extract-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = 
{
    mode: modoDev? 'development': 'production',
    entry: './src/principal.js',
    output:
    {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:
    {
        static: {
            directory: __dirname + "/public"
          },
        port: 8080
    },
    plugins: 
    [
        new MiniCssExtractPuligin({
            filename: 'estilo.css'
        })
    ],
    optimization: 
    {
        minimizer: 
        [
            new CssMinimizerPlugin({}),
            new TerserPlugin({parallel: true,}),
        ]
    },
    module:
    {
        rules: 
        [
            {
                test: /\.s?[ac]ss$/,
                use: 
                [
                    MiniCssExtractPuligin.loader, 
                    // 'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                use: ['file-loader'] 
            }
        ]
    }
} ;