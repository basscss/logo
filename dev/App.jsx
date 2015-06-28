
import React from 'react'
import Logo from '../Logo'
import Box from './Box.jsx'
import Input from './Input.jsx'
import Range from './Range.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      amplitude: 4,
      wavelength: 7,
      strokeWidth: 1,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let state = this.state
    state[e.target.name] = parseFloat(e.target.value, 10)
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
          <Logo size={512} 
            guides
            amplitude={this.state.amplitude}
            wavelength={this.state.wavelength}
            strokeWidth={this.state.strokeWidth} />
        </div>
        <Box>
          <Range
            label='Amplitude'
            id='amplitude'
            min={0}
            max={16}
            step={.25}
            onChange={this.handleChange}
            value={this.state.amplitude} />
          <Range
            label='Wavelength'
            id='wavelength'
            min={0.25}
            max={16}
            step={.25}
            onChange={this.handleChange}
            value={this.state.wavelength} />
          <Range
            label='Stroke Width'
            id='strokeWidth'
            min={0.25}
            max={8}
            step={.25}
            onChange={this.handleChange}
            value={this.state.strokeWidth} />
        </Box>
        <Box>
          <Input
            type='number'
            label='Amplitude'
            name='amplitude'
            step={.25}
            onChange={this.handleChange}
            value={this.state.amplitude} />
          <Input
            type='number'
            label='Wavelength'
            name='wavelength'
            step={.25}
            onChange={this.handleChange}
            value={this.state.wavelength} />
          <Input
            type='number'
            label='Stroke Width'
            name='strokeWidth'
            step={.25}
            onChange={this.handleChange}
            value={this.state.strokeWidth} />
        </Box>
        <div>
          <Logo size={128}
            amplitude={this.state.amplitude}
            wavelength={this.state.wavelength} />
        </div>
        {/*
        <div>
          <Logo size={64} />
        </div>
        <div>
          <Logo />
        </div>
        */}
      </div>
    )
  }

}

export default App

