
var svgpng = require('svg-to-png')

svgpng.convert('images/basscss.svg', 'images', {
    defaultWidth: 48,
    defaultHeight: 48
  })
  .then(function() {
    console.log('Converted to PNG')
  })
