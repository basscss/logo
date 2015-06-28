
import React from 'react'

class Input extends React.Component {

  render () {
    let styles = {
      label: {
        display: 'block'
      },
      input: {
        fontSize: '1rem',
        boxSizing: 'border-box',
        lineHeight: 1,
        height: '2.5rem',
        padding: '.5rem',
        width: '100%'
      }
    }
    return (
      <div>
        <label htmlFor={this.props.id}
          style={styles.label}>
          {this.props.label}
        </label>
        <input
          {...this.props}
          style={styles.input} />
      </div>
    )
  }

}

export default Input

