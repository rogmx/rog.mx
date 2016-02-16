import React from 'react'

class Icon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: '#fff'
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  componentWillMount () {
    this.setState({color: '#fff'})
  }

  mouseOver () {
    this.setState({color: '#0091FF'})
  }

  mouseOut () {
    this.setState({color: '#fff'})
  }

  render () {
    return (
      <div onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} >
        <this.props.icon color={this.state.color} className={this.props.svgclass} />
      </div>
    )
  }
}

Icon.propTypes = {
  color: React.PropTypes.string,
  svgclass: React.PropTypes.string
}

export default Icon
