const modoDev = process.env.NODE_ENV !== 'production';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import terserWebpackPlugin from 'terser-webpack-plugin';
import cssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    mode: (modoDev ? 'development' : 'production'),
    entry: './src/index.js',
    devServer: {
        static: path.resolve(__dirname, 'build'),
        port: 8080
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin({
            patterns: [
                { context: 'src/', from: '**/*.html' },
                { context: 'src/', from: 'imgs/**/*' }
            ]
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({}),
            new TerserPlugin({ parallel: true, }),
        ]
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                use: ['file-loader']
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)$/,
                type: 'asset/resource',
                use: ['file-loader']
            }
        ]
    }
}