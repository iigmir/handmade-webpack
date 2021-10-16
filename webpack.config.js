const path = require("path");
const plugins = require("./build/plugins");
const project = require("./package.json");
const rules = require("./build/loader-rules");
const devServer = require("./build/dev-server");

module.exports = env => ({
    // mode: "production",
    mode: "development",
    entry: "./src/index.js",
    module: { rules },
    plugins: plugins(env),
    // Dev parts
    devtool: "inline-source-map",
    devServer: devServer,
    // Build parts
    output: {
        filename: `./script/[name]-ver-${project.version}.js`,
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
});
