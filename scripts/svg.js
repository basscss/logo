
var fs = require('fs')
var path = require('path')
var React = require('react')
var Logo = require('../Logo')

var svg = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48">',
  React.renderToStaticMarkup(React.createElement(Logo, { size: 32 })),
  '</svg>'
].join('')

fs.writeFileSync(path.join(__dirname, '../images/basscss.svg'), svg)

console.log(svg)

