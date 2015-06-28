
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

    var rx = function(c, r, n) {
      return c + r * Math.cos(rad(n))
    }

    var ry = function(c, r, n) {
      return c + r * Math.sin(rad(n))
    }

    // angle
    let n = deg(Math.atan(amp/l))
    console.log('angle', n)

    let slope = function(rise, run) {
      return rise / run
    }

    let intersectionY = function(x1, y1, m, x2) {
      // y2 - y1 = m * (x1 - x2)
      let y2 = m * (x1 - x2) + y1
      return y2
    }

    let styles = {
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
    }

    let d = [
      'M',
      rx(c - 2 * l, r, n + 90),
      ry(c, r, n - 90),
      'L',
      c - l,
      intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), (amp / -l), c - l),
      'L',
      c + l,
      intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), (-amp / l), c + l),
      'L',
      rx(c + 2 * l, r, n + 90),
      ry(c, r, n - 90),
      'L',
      rx(c + 2 * l, r, n - 90),
      ry(c, r, n + 90),
      'L',
      c + l,
      intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), (-amp / l), c + l),
      'L',
      c - l,
      intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), (amp / -l), c -l),
      'L',
      rx(c - 2 * l, r, n - 90),
      ry(c, r, n + 90)
    ].join(' ')

    let guides = false
    if (this.props.guides) {
      guides = (
        <g stroke='rgba(0,0,255,.25)'
          strokeWidth='.125'>
          <path d={[
              'M', c, 0,
              'L', c, w,
              'M', 0, c,
              'L', w, c
            ].join(' ')} />
        </g>
      )
    }


    return (
      <svg viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        {/* guides */}
        <path d={d} />

        <g id='circles' style={styles.hide}>
          <circle cx={(c - 2 * l)} cy={c} r={r} />
          <circle cx={(c - l)} cy={c - amp} r={r} />
          <circle cx={(c + l)} cy={c + amp} r={r} />
          <circle cx={(c + 2 * l)} cy={c} r={r} />
        </g>

        <g style={styles.hide}>
          <circle cx={rx(c - l, r, n - 90)} cy={ry(c - amp, r, n - 90)} r={.25} />
          <circle cx={rx(c + l, r, n - 90)} cy={ry(c + amp, r, n - 90)} r={.25} />
        </g>
        <g style={styles.hide}>
          <circle cx={rx(c + l, r, n + 90)} cy={ry(c + amp, r, n - 90)} r={.25} />
          <circle cx={rx(c + 2 * l, r, n + 90)} cy={ry(c, r, n - 90)} r={.25} />
        </g>
        <g style={styles.hide}>
          <circle cx={rx(c - l, r, n + 90)} cy={ry(c - amp, r, n + 90)} r={.25} />
          <circle cx={rx(c + l, r, n + 90)} cy={ry(c + amp, r, n + 90)} r={.25} />
        </g>
        <g style={styles.hide}>
          <circle cx={rx(c + 2 * l, r, n - 90)} cy={ry(c, r, n + 90)} r={.25} />
          <circle cx={rx(c + l, r, n - 90)} cy={ry(c + amp, r, n + 90)} r={.25} />
        </g>

        <g style={styles.hide}>
          <circle cx={c} cy={c} r={.25} />
          <circle
            cx={rx(c, r, n - 90)}
            cy={ry(c, r, n - 90)}
            r={.25} />
        </g>

        <g style={styles.hide}>
          <circle
            cx={c - l}
            cy={intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), (amp / -l), c - l)}
            r={.25} />
          <circle
            cx={c + l}
            cy={intersectionY(rx(c, r, n - 90), ry(c, r, n - 90), (-amp / l), c + l)}
            r={.25} />
        </g>
        <g style={styles.hide}>
          <circle
            cx={c - l}
            cy={intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), (amp / -l), c - l)}
            r={.25} />
          <circle
            cx={c + l}
            cy={intersectionY(rx(c, r, n + 90), ry(c, r, n + 90), (-amp / l), c + l)}
            r={.25} />
        </g>

        <g style={styles.hide}>
          <path d={[
            'M', rx(c - l, r, n - 90), ry(c - amp, r, n - 90), 
            'L', rx(c + l, r, n - 90), ry(c + amp, r, n - 90),
            'L', rx(c + l, r, n + 90), ry(c + amp, r, n - 90),
            'L', rx(c + 2 * l, r, n + 90), ry(c, r, n - 90),
            'L', rx(c + 2 * l, r, n - 90), ry(c, r, n + 90),
            'L', rx(c + l, r, n - 90), ry(c + amp, r, n + 90),
            'L', rx(c + l, r, n + 90), ry(c + amp, r, n + 90),
            'L', rx(c - l, r, n + 90), ry(c - amp, r, n + 90),
            'L', rx(c - l, r, n - 90), ry(c - amp, r, n + 90),
            'L', rx(c - 2 * l, r, n - 90), ry(c, r, n + 90),
            'L', rx(c - 2 * l, r, n + 90), ry(c, r, n - 90),
            'L', rx(c - l, r, n + 90), ry(c - amp, r, n - 90),
          ].join(' ')} />
        </g>
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

