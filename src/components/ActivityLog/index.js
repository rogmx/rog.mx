import { h, Component } from 'preact'  // eslint-disable-line

import style from './style'

const activityTwitter = [
  {
    content: 'Breaking rocks in the hot sun. Breaking rocks in the hot sun. I fought the law and the law won. I fought the law and the law won. I fought the law and.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  },
  {
    content: 'Breaking rocks in the hot sun. Breaking rocks in the hot sun. I fought the law and the law won. I fought the law and the law won. I fought the law and.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  },
  {
    content: 'I fought the law and the law won. I fought the law and the law won.',
    date: '8 hours ago.'
  }
]

const activityGithub = [
  {
    content: 'Pushed two commits to rog3r.',
    date: '8 hours ago.'
  },
  {
    content: 'Merge branch bugs to master.',
    date: '8 hours ago.'
  },
  {
    content: 'Pushed two commits to react-example',
    date: '8 hours ago.'
  },
  {
    content: 'Pushed two commits to rog3r.',
    date: '8 hours ago.'
  },
  {
    content: 'Merge branch bugs to master.',
    date: '8 hours ago.'
  },
  {
    content: 'Pushed two commits to react-example',
    date: '8 hours ago.'
  }
]

export default class ActivityLog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      section: ''
    }
    this.getActivity = this.getActivity.bind(this)
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  componentWillMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  addActivityItem (item, i) {
    return (
      <div key={i} className={style.ActivityLog__Item}>
        <p>{item.content}</p>
        <span>{item.date}</span>
      </div>
    )
  }

  getActivity (section) {
    let activity = null
    const activitySources = {
      'twitter': activityTwitter,
      'github': activityGithub
    }

    activity = activitySources.hasOwnProperty(section) ? activitySources[section] : []
    return activity
  }

  render () {
    return (
      <div className={style.ActivityLog}>
        {this.getActivity(this.props.section).map(this.addActivityItem)}
      </div>
    )
  }
}
