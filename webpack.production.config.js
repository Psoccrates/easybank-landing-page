const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]     
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',        
                        }
                    }
                ]
            },

            {
                test: /\.(jpg|jpeg|gif|webp)$/i,
                use: ['file-loader']
            },

            {
                test: /\.(png|svg)$/,
            },

            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]

        }),
        new HtmlWebpackPlugin({
            template: './src/index.hbs'
        }),
    ],
    watch: true,
}