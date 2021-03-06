'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var Logo = (function (_React$Component) {
  function Logo() {
    _classCallCheck(this, Logo);

    _get(Object.getPrototypeOf(Logo.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Logo, _React$Component);

  _createClass(Logo, [{
    key: 'render',
    value: function render() {
      var size = this.props.size;
      var amp = this.props.amplitude;
      var l = this.props.wavelength;
      var r = this.props.strokeWidth;
      var ratio = this.props.ratio;

      var w = 32;
      var c = w / 2;
      var x1 = c - ratio * l;
      var x2 = c - l;
      var x3 = c + l;
      var x4 = c + ratio * l;
      var viewBox = [0, 0, w, w].join(' ');
      var fill = this.props.fill;

      var rad = function rad(a) {
        return Math.PI * a / 180;
      };

      var deg = function deg(r) {
        return r * 180 / Math.PI;
      };

      // Points around circle for stroke width
      var rx = function rx(c, n) {
        return c + r * Math.cos(rad(n));
      };

      var ry = function ry(c, n) {
        return c + r * Math.sin(rad(n));
      };

      // angle based on slope
      var n = deg(Math.atan(amp / l));
      var n1 = n - 90;
      var n2 = n + 90;

      // vertex based on intersection point
      var vertex = function vertex(x1, y1, x) {
        var m = -amp / l; // slope
        var y = m * (x1 - x) + y1;
        return y;
      };

      var styles = {
        guide: {
          fill: 'none',
          stroke: 'rgba(255,0,0,.25)',
          strokeWidth: .0625
        },
        grid: {
          fill: 'none',
          stroke: 'rgba(0,0,255,.25)',
          strokeWidth: .0625
        }
      };

      var d = ['M', rx(x1, n1), ry(c, n2), 'L', x2, vertex(rx(c, n1), ry(c, n1), x2), 'L', x3, vertex(rx(c, n1), ry(c, n1), x3), 'L', rx(x4, n2), ry(c, n - 90), 'L', x3, vertex(rx(c, n2), ry(c, n2), x3), 'L', x2, vertex(rx(c, n2), ry(c, n2), x2), 'L', rx(x1, n1), ry(c, n2)].join(' ');

      var guides = false;
      if (this.props.guides) {
        guides = _react2['default'].createElement(
          'g',
          { style: styles.guide },
          _react2['default'].createElement('path', { d: ['M', c, 0, 'L', c, w, 'M', 0, c, 'L', w, c, 'M', 0, 0, 'L', w, 0, 'L', w, w, 'L', 0, w, 'L', 0, 0, 'M', c - l, 0, 'L', c - l, w, 'M', c + l, 0, 'L', c + l, w, 'M', 0, c - amp, 'L', w, c - amp, 'M', 0, c + amp, 'L', w, c + amp].join(' ') })
        );
      }

      var grid = false;
      if (this.props.grid) {
        var xGrid = function xGrid() {
          var lines = ['M 0 0'];
          for (var i = 0; i < w; i++) {
            lines.push(['L', i, w, 'M', i + 1, 0].join(' '));
          }
          return lines.join(' ');
        };

        var yGrid = function yGrid() {
          var lines = ['M 0 0'];
          for (var i = 0; i < w; i++) {
            lines.push(['L', w, i, 'M', 0, i + 1].join(' '));
          }
          return lines.join(' ');
        };

        grid = _react2['default'].createElement('path', { style: styles.grid,
          d: [xGrid(), yGrid()].join(' ') });
      }

      return _react2['default'].createElement(
        'svg',
        { viewBox: viewBox,
          width: size,
          height: size,
          fill: fill },
        grid,
        guides,
        _react2['default'].createElement('path', { d: d })
      );
    }
  }]);

  return Logo;
})(_react2['default'].Component);

Logo.propTypes = {
  size: _react2['default'].PropTypes.number,
  amplitude: _react2['default'].PropTypes.number,
  wavelength: _react2['default'].PropTypes.number,
  ratio: _react2['default'].PropTypes.number,
  strokeWidth: _react2['default'].PropTypes.number,
  fill: _react2['default'].PropTypes.string,
  guides: _react2['default'].PropTypes.bool,
  grid: _react2['default'].PropTypes.bool
};

Logo.defaultProps = _defaults2['default'];

exports['default'] = Logo;
module.exports = exports['default'];