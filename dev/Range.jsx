
import React from 'react'

class Range extends React.Component {

  render () {
    let styles = {
      label: {
        display: 'block'
      },
      input: {
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
          type='range'
          {...this.props}
          name={this.props.id}
          style={styles.input} />
      </div>
    )
  }

}

export default Range

