import { h, Component } from 'preact'  // eslint-disable-line

export default class Icon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: this.props.color,
      active: this.props.active
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  componentWillMount () {
    this.setState({color: this.props.color})
  }

  mouseOver () {
    this.setState({color: this.props.colorHover})
  }

  mouseOut () {
    this.setState({color: this.props.color})
  }

  render () {
    return (
      <div onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} >
        <this.props.icon
          color={this.props.active ? this.props.colorHover : this.state.color}
          className={this.props.svgClass}
        />
      </div>
    )
  }
}
