
var fs = require('fs')
var path = require('path')
var React = require('react')
var Logo = require('../Logo')
var config = require('./config')

function render (size) {
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="',
    size,
    '" height="',
    size,
    '">',
    React.renderToStaticMarkup(React.createElement(Logo, { size: 32 })),
    '</svg>'
  ].join('')

  fs.writeFileSync(path.join(__dirname, '../images/basscss-' + size + '.svg'), svg)
  console.log('Rendered basscss-' + size + '.svg') 

}

config.sizes.forEach(function (size) {
  render (size)
})


