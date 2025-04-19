/*const path = require("path");

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
            // Add fallbacks if needed for jsPDF or other libraries
            fs: false, // jsPDF doesn't require 'fs' in the browser
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
    performance: {
        maxAssetSize: 512000,       // 500 KiB
        maxEntrypointSize: 512000   // 500 KiB
    }
};*/

const path = require("path");
const fs = require("fs");
const pathToConfig = path.resolve(__dirname, "config.json");
const pathToDistConfig = path.resolve(__dirname, "dist", "config.json");

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
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    // Using the done hook to copy config.json manually
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.done.tap("CopyConfigPlugin", () => {
                    // Check if config.json exists in the root
                    if (fs.existsSync(pathToConfig)) {
                        fs.copyFileSync(pathToConfig, pathToDistConfig);
                        console.log("📄 config.json has been copied to the dist folder.");
                    } else {
                        console.error("❌ config.json is missing!");
                    }
                });
            }
        }
    ]
};
