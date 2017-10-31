const path = require("path");
const webpack = require("webpack");
const {CheckerPlugin} = require("awesome-typescript-loader");

const isProdutcion = process.argv.indexOf("-p") !== -1;

module.exports = {
    devtool: !isProdutcion && "source-map",
    entry: {
        commons: [
            "promise-polyfill",
            "whatwg-fetch",
            "bootstrap/dist/css/bootstrap.css"
        ],
        main: "./Client/main.tsx"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./wwwroot/dist"),
        publicPath: "dist/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    stats: {
        modules: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader?silent=true"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            minChunks: (module, count) => {
                return module.context && module.context.indexOf("node_modules") !== -1 || count === 2;
            }
        })
    ]
};