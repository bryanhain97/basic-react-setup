const path = require('path');

module.exports = {
  entry: './src/App.transpiled.js',
  output: {
    filename: 'App.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: "development"
};