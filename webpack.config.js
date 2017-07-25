var path = require('path')

module.exports = {
    output: {
        filename: "./[name]/bundle.js"
    },
    entry: {
        demo1: "./input/demo.js",
        modal: "./modal/demo.js",
        diy: "./diy/demo.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react','stage-0']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    webserver: {
        hot: true
    },
};
