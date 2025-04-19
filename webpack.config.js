const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        background: "./src/background.js",
        contentScript: "./src/contentScript.js",
        popup: "./src/popup.js",
        groqRequest: "./src/groqRequest.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".js"],
        fallback: {
            fs: false,
            path: false,
            crypto: false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "config.json", to: "config.json" }
            ]
        })
    ],
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    }
};
