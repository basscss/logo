
import React from 'react'
import hljs from 'highlight.js'
import Logo from '../Logo'

class SVGCode extends React.Component {

  render () {

    let svg = hljs.highlightAuto(React.renderToStaticMarkup(<Logo {...this.props} />)).value
    let styles = {
      pre: {
        whiteSpace: 'pre-wrap'
      }
    }


    return (
      <div>
        <h3>SVG Code</h3>
        <pre
          style={styles.pre}
          dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    )
  }

}

export default SVGCode

