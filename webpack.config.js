const { createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps, addPlugins } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const sass = require('@webpack-blocks/sass');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = createConfig([
    entryPoint('./src/index.js'),
    entryPoint('./src/styles.scss'),
    setOutput('./build/bundle.js'),
    babel(),
    postcss([
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    defineConstants({
        'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    addPlugins([
        new HtmlWebpackPlugin({
            template: './index.ejs',
            inject: true,
            //favicon: 'favicon.png',
            hash: true
        })
    ]),
    sass(),
    env('development', [
        devServer(),
        devServer.proxy({
            '/api': { target: 'http://localhost:3000' }
        }),
        sourceMaps()
    ]),
    env('production', [
        addPlugins([
            new webpack.optimize.UglifyJsPlugin()
        ])
    ])
])
