const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return [
        /**
         * Static files managements
         * @see https://stackoverflow.com/a/33374807
         */
        new CopyPlugin({
            patterns: [
                { from: "img", to: "img" },
                { from: "static" },
            ],
        }),
        /**
         * HTML managements
         * @see https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
         */
        new HtmlWebpackPlugin({
            title: "Hello VA",
            template: "./src/index.html",
        }),
    ]
};
