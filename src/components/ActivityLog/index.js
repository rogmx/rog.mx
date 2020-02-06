import { h, Component } from 'preact'  // eslint-disable-line

import style from './style'

const activity = {
  twitter: [{
    content: 'Breaking rocks in the hot sun. Breaking rocks in the hot sun. I fought the law and the law won. I fought the law and the law won. I fought the law and.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }, {
    content: 'Breaking rocks in the hot sun. Breaking rocks in the hot sun. I fought the law and the law won. I fought the law and the law won. I fought the law and.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }, {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }],
  github: [],
  music: [],
  blog: []
}


export default class ActivityLog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      section: '',
      activity: []
    }
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  componentDidMount () {
    this.setState({activity: activity[this.props.section]})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.section !== this.props.section) {
      this.setState({activity: activity[nextProps.section]})
    }
  }

  addActivityItem (item, i) {
    return (
      <div key={i} className={style.ActivityLog__Item}>
        <p>{item.content}</p>
        <span>{item.date}</span>
      </div>
    )
  }

  render () {
    const activity = this.state.activity
    return (
      <div className={style.ActivityLog}>
        {activity.map(this.addActivityItem)}
      </div>
    )
  }
}
