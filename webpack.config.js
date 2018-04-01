const path = require('path');
const ChromeManifestPlugin = require('./chrome-manifest-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[ext]",
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
