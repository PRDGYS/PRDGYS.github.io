var path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};