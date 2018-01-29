import { h, Component } from 'preact'  // eslint-disable-line

import style from './style'

// import rog3r from 'rog3r'

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

export default class ActivityLog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      section: '',
      activity: []
    }
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  componentWillMount () {
    let activity = []
    if (this.props.section === 'github') {
      /* rog3r.github().then(response => {
        console.log(response)
        response.forEach(function (commit) {
          const item = {
            date: commit.created_at,
            content: `${commit.type}: ${commit.payload.commits[0].message}`
          }
          console.log(item)
          activity.push(item)
        })
        this.setState({activity})
      }) */
    }

    if (this.props.section === 'twitter') {
      activity = activityTwitter
      this.setState({activity})
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
