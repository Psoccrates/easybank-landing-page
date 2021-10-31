const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist')
        },

        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }

    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
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
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',   
                            outputPath : 'images/'   
                        }
                    }
                ]
            },

            /*{
                test: /\.(png|svg)$/,
                
            },*/

            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]                             
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/images', to: 'images'}
            ]

        }),
        
        new HtmlWebpackPlugin({ 
            template: './src/index.hbs'
        }),
    ],
}