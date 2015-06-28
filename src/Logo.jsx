
import React from 'react'

class Logo extends React.Component {

  render () {
    let size = this.props.size
    let amp = this.props.amplitude
    let l = this.props.wavelength
    let r = this.props.strokeWidth

    let w = 32
    let c = w / 2
    let viewBox = [0, 0, w, w].join(' ')
    let fill = this.props.fill

    let rad = function(a) {
      return Math.PI * a / 180
    }

    let deg = function(r) {
      return r * 180/Math.PI
    }

    // Points around circle for stroke width
    var rx = function(c, n) {
      return c + r * Math.cos(rad(n))
    }

    var ry = function(c, n) {
      return c + r * Math.sin(rad(n))
    }

    // angle based on slope
    let n = deg(Math.atan(amp/l))
    let n1 = n - 90
    let n2 = n + 90

    // vertex based on intersection point
    let vertex = function(x1, y1, x) {
      // slope
      let m = -amp / l
      let y = m * (x1 - x) + y1
      return y
    }

    let styles = {
      guide: {
        fill: 'none',
        stroke: 'rgba(255,0,0,.25)',
        strokeWidth: .0625
      }
    }

    let d = [
      'M',
      //rx(c - 2 * l, n2),
      //ry(c, n1),
      rx(c - 2 * l, n1),
      ry(c, n2),
      'L',
      c - l,
      vertex(rx(c, n1), ry(c, n1), c - l),
      'L',
      c + l,
      vertex(rx(c, n1), ry(c, n1), c + l),
      'L',
      rx(c + 2 * l, n2),
      ry(c, n - 90),
      //'L',
      //rx(c + 2 * l, n1),
      //ry(c, n + 90),
      'L',
      c + l,
      vertex(rx(c, n2), ry(c, n2), c + l),
      'L',
      c - l,
      vertex(rx(c, n2), ry(c, n2), c -l),
      'L',
      rx(c - 2 * l, n1),
      ry(c, n2)
    ].join(' ')

    let guides = false
    if (this.props.guides) {
      guides = (
        <g style={styles.guide}>
          <path d={[
              'M', c, 0,
              'L', c, w,
              'M', 0, c,
              'L', w, c,
              'M', 0, 0,
              'L', w, 0,
              'L', w, w,
              'L', 0, w,
              'L', 0, 0,
              'M', c - l, 0,
              'L', c - l, w,
              'M', c + l, 0,
              'L', c + l, w,
              'M', 0, c - amp,
              'L', w, c - amp,
              'M', 0, c + amp,
              'L', w, c + amp,
            ].join(' ')} />
        </g>
      )
    }

    return (
      <svg viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        {guides}
        <path d={d} />
      </svg>
    )
  }

}

Logo.propTypes = {
  size: React.PropTypes.number,
  amplitude: React.PropTypes.number,
  wavelength: React.PropTypes.number,
  strokeWidth: React.PropTypes.number,
  fill: React.PropTypes.string,
  guides: React.PropTypes.bool,
}

Logo.defaultProps = {
  size: 48,
  amplitude: 4,
  wavelength: 8,
  strokeWidth: 1,
  fill: 'currentcolor'
}

export default Logo

