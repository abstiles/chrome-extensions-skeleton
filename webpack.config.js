const ChromeManifestPlugin = require('./chrome-manifest-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: __dirname + 'dist',
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
