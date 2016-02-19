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

class AboutCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: false,
      section: ''
    }
    this.mouseClick = this.mouseClick.bind(this)
    this.addMenuItem = this.addMenuItem.bind(this)
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
              svgClass={styles.AboutCard__SocialLinks__Link__Icon}
            />
            : <span className={styles.AboutCard__SocialLinks__Link__Text}>{item.title}</span>
          }
        </div>
      </li>
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
          <div className={classNames({
            [styles.AboutCard__Activity]: true,
            [styles['AboutCard__Activity--show']]: this.state.compact
          })}>
            <div className={styles.AboutCard__Activity__Separator}></div>
            <span
              className={styles.AboutCard__Activity__Close}
              onClick={this.mouseClick.bind(null, '')} />
            <h3>» ./{this.state.section}</h3>
            <div className={styles.AboutCard__Activity__Log}>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>Breaking rocks in the hot sun. Breaking rocks in the hot sun. I fought the law and the law won. I fought the law and the law won. I fought the law and.</p>
                <span>8 hours ago.</span>
              </div>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>I fought the law and the law won.</p>
                <span>8 hours ago.</span>
              </div>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>I fought the law and the law won.</p>
                <span>8 hours ago.</span>
              </div>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>I fought the law and the law won.</p>
                <span>8 hours ago.</span>
              </div>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>I fought the law and the law won.</p>
                <span>8 hours ago.</span>
              </div>
              <div className={styles.AboutCard__Activity__Log__Item}>
                <p>I fought the law and the law won.</p>
                <span>8 hours ago.</span>
              </div>
            </div>
          </div>
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
