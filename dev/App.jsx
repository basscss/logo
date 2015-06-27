
import React from 'react'
import Logo from '../Logo'
import Box from './Box.jsx'
import Range from './Range.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      amplitude: 4,
      wavelength: 8
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let state = this.state
    state[e.target.name] = parseInt(e.target.value, 10)
    console.log(e.target.name)
    this.setState(state)
  }

  render () {
    let style = {
      fontFamily: 'sans-serif',
      padding: '2rem',
      maxWidth: '48rem',
      margin: 'auto'
    }
    return (
      <div style={style}>
        <h1>Basscss Logo Dev</h1>
        <div>
          <Logo size={256} 
            guides
            amplitude={this.state.amplitude}
            wavelength={this.state.wavelength} />
        </div>
        <Box>
          <Range
            label='Amplitude'
            id='amplitude'
            min={0}
            max={8}
            onChange={this.handleChange}
            value={this.state.amplitude} />
          <Range
            label='Wavelength'
            id='wavelength'
            min={0}
            max={16}
            onChange={this.handleChange}
            value={this.state.wavelength} />
        </Box>
        <div>
          <Logo size={128} />
        </div>
        <div>
          <Logo size={64} />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    )
  }

}

export default App

