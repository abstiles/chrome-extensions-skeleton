const path = require('path');

module.exports = {
  resolveLoader: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  entry: "./manifest.json",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "manifest.js",
  },

  module: {
    rules: [
      {
        test: /manifest\.json$/,
        use: [
          "json-loader",
          "manifest-loader",
        ]
      }
    ]
  }
};
