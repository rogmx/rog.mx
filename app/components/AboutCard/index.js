import React from 'react'
import classNames from 'classnames'

import Prompt from '../Prompt'
import ActivityLog from '../ActivityLog'

import styles from './styles.css'
import Avatar from './images/me.png'
import Logo from '../Icons/Logo'

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
    if (section === this.state.section) {
      this.setState({compact})
    } else {
      this.setState({
        compact,
        section
      })
    }
  }

  addMenuItem (item, i) {
    return (
      <li key={i} className={styles.AboutCard__Sidebar__SocialLinks__Item}>
        <div onClick={this.mouseClick.bind(null, item.title.toLowerCase())} className={styles.AboutCard__Sidebar__Link} href={item.link}>
          {item.icon !== null
            ? <Icon
                icon={item.icon}
                color='#FFF'
                colorHover='#0091FF'
                active={this.state.section === item.title.toLowerCase()}
                svgClass={styles.AboutCard__Sidebar__Link__Icon}
              />
            : <span
                 className={classNames({
                   [styles.AboutCard__Sidebar__Link__Text]: true,
                   [styles['AboutCard__Sidebar__Link__Text--active']]: this.state.section === item.title.toLowerCase()
                 })}>
              {item.title}
              </span>
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
            <p className={styles.AboutCard__Bio__Info__Subtitle}>Webmaster</p>
          </div>
          {this.state.compact
            ? <div className={classNames([styles.AboutCard__Activity, styles['AboutCard__Activity--show']])}>
                <span className={styles.AboutCard__Activity__Close} onClick={this.mouseClick.bind(null, '')} />
                <Prompt command={this.state.section} />
                <ActivityLog section={this.state.section} />
              </div>
            : null
          }
        </div>
        <div className={styles.AboutCard__Sidebar}>
          <Logo
            className={styles.AboutCard__Logo}
            classLetter={styles.AboutCard__Logo__Letter}
            classLetterAnimated={styles['AboutCard__Logo__Letter--animated']}
          />
          <div className={styles.AboutCard__Sidebar__SocialLinks__Wrapper}>
            <ul className={styles.AboutCard__Sidebar__SocialLinks}>
              {menuItems.map(this.addMenuItem)}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutCard
