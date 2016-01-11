var $ = require('jquery');

// chained style loaders are in webpack-config
// looking for any css files
require('./bear.css');

module.exports = $('<div/>').html('webpack module load file!');