const path = require('path');
const ChromeManifestPlugin = require('./chrome-manifest-plugin');

module.exports = {
  resolveLoader: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },

  plugins: [ new ChromeManifestPlugin() ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [ "ts-loader" ],
      }
    ]
  }
};
