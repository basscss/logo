
var svgpng = require('svg-to-png')
var config = require('./config')

function convert (size) {
  svgpng.convert('images/basscss-' + size + '.svg', 'images', {
      defaultWidth: size,
      defaultHeight: size
    })
    .then(function () {
      console.log('Converted to ' + size + ' PNG')
    })
}

config.sizes.forEach(function (size) {
  convert (size)
})

