import { h, Component } from 'preact'  // eslint-disable-line
import classNames from 'classnames'

import style from './style'

import Prompt from '../Prompt'

import Logo from '../Logo'
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
    link: 'http://github.com/rog'
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

export default class AboutCard extends Component {
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
      <li key={i} className={style.AboutCard__Sidebar__SocialLinks__Item}>
        <div onClick={this.mouseClick.bind(null, item.title.toLowerCase())} className={style.AboutCard__Sidebar__Link} href={item.link}>
          {item.icon !== null
            ? <Icon
              icon={item.icon}
              color='#FFF'
              colorHover='#0091FF'
              active={this.state.section === item.title.toLowerCase()}
              svgClass={style.AboutCard__Sidebar__Link__Icon}
              />
            : <span
              className={classNames({
                [style.AboutCard__Sidebar__Link__Text]: true,
                [style['AboutCard__Sidebar__Link__Text--active']]: this.state.section === item.title.toLowerCase()
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
        [style.AboutCard]: true,
        [style['AboutCard--compact']]: this.state.compact
      })}>
        <div className={style.AboutCard__Bio}>
          <img src={Avatar} className={style.AboutCard__Bio__Avatar} />
          <div className={style.AboutCard__Bio__Info}>
            <h2 className={style.AboutCard__Bio__Info__Title}>Rogelio Alberto</h2>
            <p className={style.AboutCard__Bio__Info__Subtitle}>Webmaster</p>
          </div>
          {this.state.compact
            ? <div className={classNames([style.AboutCard__Activity, style['AboutCard__Activity--show']])}>
              <span className={style.AboutCard__Activity__Close} onClick={this.mouseClick.bind(null, '')} />
              <Prompt command={this.state.section} />
            </div>
            : null
          }
        </div>
        <div className={style.AboutCard__Sidebar}>
          <a href='#'><Logo /></a>
          <div className={style.AboutCard__Sidebar__SocialLinks__Wrapper}>
            <ul className={style.AboutCard__Sidebar__SocialLinks}>
              {menuItems.map(this.addMenuItem)}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
