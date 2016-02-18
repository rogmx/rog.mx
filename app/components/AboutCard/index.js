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
      compact: false
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.addMenuItem = this.addMenuItem.bind(this)
  }

  mouseOver () {
    this.setState({compact: !this.state.compact})
  }

  addMenuItem (item, i) {
    return (
      <li key={i} className={styles.AboutCard__SocialLinks__List__Item}>
        <div onClick={this.mouseOver} className={styles.AboutCard__SocialLinks__Link} href={item.link}>
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
            <p>Hola</p>
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
