import React from 'react'

import styles from './styles.css'

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

class ActivityLog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      section: ''
    }
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  componentWillMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  addActivityItem (item, i) {
    return (
      <div key={i} className={styles.ActivityLog__Item}>
        <p>{item.content}</p>
        <span>{item.date}</span>
      </div>
    )
  }

  render () {
    return (
      <div className={styles.ActivityLog}>
        {activityTwitter.map(this.addActivityItem)}
      </div>
    )
  }
}

ActivityLog.propTypes = {
  section: React.PropTypes.string
}

export default ActivityLog
