var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var postcssNesting = require('postcss-nesting');
var customProperties = require("postcss-custom-properties");
var colorFunction = require("postcss-color-function");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './examples/index.js'),
    output: {
        path: path.join(__dirname, 'examples/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ],
    stats: {
        children: false
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap')
            }
        ]
    },
    resolve: {
        alias: {
            'react-divtable$': path.join(__dirname, 'modules'),
            'react-divtable/styles.scss$': path.join(__dirname, 'styles.scss')
        }
    },
    postcss: [
        postcssNesting(),
        customProperties(),
        colorFunction(),
        autoprefixer({ browsers: ['last 2 versions'] })
    ]
};
