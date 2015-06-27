
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
    //let fill = this.props.fill
    let fill = 'rgba(0,128,255,.125)'

    let rad = function(a) {
      return Math.PI * a / 180
    }

    let rx = function(r, a) {
      return c + r * Math.cos(rad(a))
    }

    let ry = function(r, a) {
      return c + r * Math.sin(rad(a))
    }

    let d = [
      'M', 0, (c + r),
      'L', (c - l), (c - amp),
      'L', (c + l), (c + amp - r),
      'L', w, (c - r),
      'L', (c + l), (c + amp),
      'L', (c - l), (c - amp + r),
      'z'
    ].join(' ')

    let d2 = [
      'M', c - 2 * l, c,
      'L', c - l, c - amp,
      'L', c + l, c + amp,
      'L', c + 2 * l, c
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

    let styles = {
      guide: {
        fill: 'rgba(255,0,0,.125)',
        stroke: 'red',
        strokeWidth: .125
      }
    }

    return (
      <svg viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        {guides}
        <path d={d} />
        <path d={d2} style={styles.guide} />
        <g id='circles' style={styles.guide}>
          <circle cx={(c - 2 * l)} cy={c} r={r} />
          <circle cx={(c - l)} cy={c - amp} r={r} />
          <circle cx={(c + l)} cy={c + amp} r={r} />
          <circle cx={(c + 2 * l)} cy={c} r={r} />
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

