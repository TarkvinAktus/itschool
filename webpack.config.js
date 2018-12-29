var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    mode: "production", // "production" | "development" | "none"s
    cache: true,
    entry: {
        main:  './src/components/index.jsx'
    },
    
    output: {
        path: __dirname + "/public/build",
        filename: '[name].js'
    },

    module: {
        
        rules: [
            {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {loader: 'babel-loader',
            
            test: /\.js$/, exclude: /node_modules/}, 
            {test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
            }]
            
        //rules: [
            //{test: /\.jsx$/, loader: 'jsx-loader?harmony'},/*
           /* {test: /\.js$/ , loader: 'jsx-loader?harmony'},
            {test: /\.js.*$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.jsx.*$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/,loader: "style-loader!css-loader"},
            {test: /\.gif/,loader: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg/,loader: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png/,loader: 'url-loader?limit=10000&mimetype=image/png'},
            {test: /\.svg/,loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}*/
            
        //]
        /*{test: /\.jsx$/, loader: 'jsx-loader?harmony'},
        {test: /\.js$/ , loader: 'jsx-loader?harmony'},
            {test: /\.js.*$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/,loader: "style-loader!css-loader"},
            {test: /\.gif/,loader: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg/,loader: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png/,loader: 'url-loader?limit=10000&mimetype=image/png'},
            {test: /\.svg/,loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]*/
    },
    plugins: [
        definePlugin
        
    ]
};