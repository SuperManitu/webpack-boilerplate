const { createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const sass = require('@webpack-blocks/sass');
const autoprefixer = require('autoprefixer');

module.exports = createConfig([
    entryPoint('./src/index.js'),
    setOutput('./build/bundle.js'),
    babel(),
    postcss([
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    defineConstants({
        'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    sass(),
    env('development', [
        devServer(),
        devServer.proxy({
            '/api': { target: 'http://localhost:3000' }
        }),
        sourceMaps()
    ])
])
