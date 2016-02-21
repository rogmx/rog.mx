import React from 'react'
import classNames from 'classnames'

import styles from './styles.css'
import Avatar from './images/me.png'

import Icon from '../Icons/Icon'
import IconTwitter from '../Icons/twitter'
import IconGithub from '../Icons/github'
import IconMusic from '../Icons/music'

const menuItems = [
  {
    title: 'Twitter',
    icon: IconTwitter,
    link: 'http://twitter.com/rog3r'
  },
  {
    title: 'Github',
    icon: IconGithub,
    link: 'http://github.com/rogr'
  },
  {
    title: 'Music',
    icon: IconMusic,
    link: 'http://last.fm/user/rog3r'
  },
  {
    title: 'Blog',
    icon: null,
    link: '#'
  }
]

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

class AboutCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: false,
      section: ''
    }
    this.mouseClick = this.mouseClick.bind(this)
    this.addMenuItem = this.addMenuItem.bind(this)
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  mouseClick (section) {
    const compact = (section === '' || this.state.section === '') ? !this.state.compact : this.state.compact
    this.setState({
      compact,
      section
    })
  }

  addMenuItem (item, i) {
    return (
      <li key={i} className={styles.AboutCard__SocialLinks__List__Item}>
        <div onClick={this.mouseClick.bind(null, item.title.toLowerCase())} className={styles.AboutCard__SocialLinks__Link} href={item.link}>
          {item.icon !== null
            ? <Icon
                icon={item.icon}
                color='#FFF'
                colorHover='#0091FF'
                active={this.state.section === item.title.toLowerCase()}
                svgClass={styles.AboutCard__SocialLinks__Link__Icon}
              />
            : <span className={styles.AboutCard__SocialLinks__Link__Text}>{item.title}</span>
          }
        </div>
      </li>
    )
  }

  addActivityItem (item, i) {
    return (
      <div key={i} className={styles.AboutCard__Activity__Log__Item}>
        <p>{item.content}</p>
        <span>{item.date}</span>
      </div>
    )
  }

  render () {
    return (
      <section className={classNames({
        [styles.AboutCard]: true,
        [styles['AboutCard--compact']]: this.state.compact
      })}>
        <div className={styles.AboutCard__Bio}>
          <img src={Avatar} className={styles.AboutCard__Bio__Avatar} />
          <div className={styles.AboutCard__Bio__Info}>
            <h2 className={styles.AboutCard__Bio__Info__Title}>Rogelio Alberto</h2>
            <p className={styles.AboutCard__Bio__Info__Subtitle}>Web Developer</p>
          </div>
          {this.state.compact
            ? <div className={classNames([styles.AboutCard__Activity, styles['AboutCard__Activity--show']])}>
                <span
                  className={styles.AboutCard__Activity__Close}
                  onClick={this.mouseClick.bind(null, '')} />
                <h3>» ./{this.state.section}</h3>
                  <div className={styles.AboutCard__Activity__Log}>
                    {activityTwitter.map(this.addActivityItem)}
                  </div>
              </div>
            : null
          }
        </div>
        <div className={styles.AboutCard__SocialLinks}>
          <ul className={styles.AboutCard__SocialLinks__List}>
            {menuItems.map(this.addMenuItem)}
          </ul>
        </div>
      </section>
    )
  }
}

export default AboutCard
