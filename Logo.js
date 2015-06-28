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

      var w = 32;
      var c = w / 2;
      var viewBox = [0, 0, w, w].join(' ');
      var fill = this.props.fill;

      var rad = function rad(a) {
        return Math.PI * a / 180;
      };

      var deg = function deg(r) {
        return r * 180 / Math.PI;
      };

      var rx = function rx(c, r, n) {
        return c + r * Math.cos(rad(n));
      };

      var ry = function ry(c, r, n) {
        return c + r * Math.sin(rad(n));
      };

      // angle
      var n = deg(Math.atan(amp / l));
      console.log('angle', n);

      var slope = function slope(rise, run) {
        return rise / run;
      };

      var intersectionY = function intersectionY(x1, y1, m, x2) {
        // y2 - y1 = m * (x1 - x2)
        var y2 = m * (x1 - x2) + y1;
        return y2;
      };

      var styles = {
        hide: {
          fill: 'none'
        },
        guide: {
          fill: 'rgba(255,0,0,.125)',
          stroke: 'red',
          strokeWidth: .125
        },
        blue: {
          fill: 'rgba(0,0,255,.75)'
        },
        cyan: {
          fill: 'rgba(0,255,255,.75)'
        },
        magenta: {
          fill: 'rgba(255,0,255,.75)'
        },
        red: {
          fill: 'rgba(255,0,0,.75)'
        },
        text: {
          fontSize: 2
        }
      };

      var d = ['M', rx(c - 2 * l, r, n + 90), ry(c, r, n - 90), 'L', c - l, intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), amp / -l, c - l), 'L', c + l, intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), -amp / l, c + l), 'L', rx(c + 2 * l, r, n + 90), ry(c, r, n - 90), 'L', rx(c + 2 * l, r, n - 90), ry(c, r, n + 90), 'L', c + l, intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), -amp / l, c + l), 'L', c - l, intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), amp / -l, c - l), 'L', rx(c - 2 * l, r, n - 90), ry(c, r, n + 90)].join(' ');

      var guides = false;
      if (this.props.guides) {
        guides = _react2['default'].createElement(
          'g',
          { stroke: 'rgba(0,0,255,.25)',
            strokeWidth: '.125' },
          _react2['default'].createElement('path', { d: ['M', c, 0, 'L', c, w, 'M', 0, c, 'L', w, c].join(' ') })
        );
      }

      return _react2['default'].createElement(
        'svg',
        { viewBox: viewBox,
          width: size,
          height: size,
          fill: fill },
        _react2['default'].createElement('path', { d: d }),
        _react2['default'].createElement(
          'g',
          { id: 'circles', style: styles.hide },
          _react2['default'].createElement('circle', { cx: c - 2 * l, cy: c, r: r }),
          _react2['default'].createElement('circle', { cx: c - l, cy: c - amp, r: r }),
          _react2['default'].createElement('circle', { cx: c + l, cy: c + amp, r: r }),
          _react2['default'].createElement('circle', { cx: c + 2 * l, cy: c, r: r })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', { cx: rx(c - l, r, n - 90), cy: ry(c - amp, r, n - 90), r: .25 }),
          _react2['default'].createElement('circle', { cx: rx(c + l, r, n - 90), cy: ry(c + amp, r, n - 90), r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', { cx: rx(c + l, r, n + 90), cy: ry(c + amp, r, n - 90), r: .25 }),
          _react2['default'].createElement('circle', { cx: rx(c + 2 * l, r, n + 90), cy: ry(c, r, n - 90), r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', { cx: rx(c - l, r, n + 90), cy: ry(c - amp, r, n + 90), r: .25 }),
          _react2['default'].createElement('circle', { cx: rx(c + l, r, n + 90), cy: ry(c + amp, r, n + 90), r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', { cx: rx(c + 2 * l, r, n - 90), cy: ry(c, r, n + 90), r: .25 }),
          _react2['default'].createElement('circle', { cx: rx(c + l, r, n - 90), cy: ry(c + amp, r, n + 90), r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', { cx: c, cy: c, r: .25 }),
          _react2['default'].createElement('circle', {
            cx: rx(c, r, n - 90),
            cy: ry(c, r, n - 90),
            r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', {
            cx: c - l,
            cy: intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), amp / -l, c - l),
            r: .25 }),
          _react2['default'].createElement('circle', {
            cx: c + l,
            cy: intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), -amp / l, c + l),
            r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('circle', {
            cx: c - l,
            cy: intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), amp / -l, c - l),
            r: .25 }),
          _react2['default'].createElement('circle', {
            cx: c + l,
            cy: intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), -amp / l, c + l),
            r: .25 })
        ),
        _react2['default'].createElement(
          'g',
          { style: styles.hide },
          _react2['default'].createElement('path', { d: ['M', rx(c - l, r, n - 90), ry(c - amp, r, n - 90), 'L', rx(c + l, r, n - 90), ry(c + amp, r, n - 90), 'L', rx(c + l, r, n + 90), ry(c + amp, r, n - 90), 'L', rx(c + 2 * l, r, n + 90), ry(c, r, n - 90), 'L', rx(c + 2 * l, r, n - 90), ry(c, r, n + 90), 'L', rx(c + l, r, n - 90), ry(c + amp, r, n + 90), 'L', rx(c + l, r, n + 90), ry(c + amp, r, n + 90), 'L', rx(c - l, r, n + 90), ry(c - amp, r, n + 90), 'L', rx(c - l, r, n - 90), ry(c - amp, r, n + 90), 'L', rx(c - 2 * l, r, n - 90), ry(c, r, n + 90), 'L', rx(c - 2 * l, r, n + 90), ry(c, r, n - 90), 'L', rx(c - l, r, n + 90), ry(c - amp, r, n - 90)].join(' ') })
        )
      );
    }
  }]);

  return Logo;
})(_react2['default'].Component);

Logo.propTypes = {
  size: _react2['default'].PropTypes.number,
  amplitude: _react2['default'].PropTypes.number,
  wavelength: _react2['default'].PropTypes.number,
  strokeWidth: _react2['default'].PropTypes.number,
  fill: _react2['default'].PropTypes.string,
  guides: _react2['default'].PropTypes.bool
};

Logo.defaultProps = {
  size: 48,
  amplitude: 4,
  wavelength: 8,
  strokeWidth: 1,
  fill: 'currentcolor'
};

exports['default'] = Logo;
module.exports = exports['default'];
/* guides */