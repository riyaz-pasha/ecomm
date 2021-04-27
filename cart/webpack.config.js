const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8002,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes: {
                "./CartShow": "./src/index.js",
            }
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
    ]
}