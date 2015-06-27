
import React from 'react'

class Box extends React.Component {

  render () {
    let style = {
      padding: '1rem',
      border: '1px solid rgba(0,0,0,.125)'
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

export default Box

