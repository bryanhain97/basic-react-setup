const path = require('path');

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "App.bundle.js",
        path: path.resolve(__dirname, 'public') // path: micromerce_react/ + 'public'
    }
}