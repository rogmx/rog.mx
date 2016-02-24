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
      section: '',
      prompt: '',
      promptValid: true
    }
    this.prompt = this.prompt.bind(this)
    this.promptBlur = this.promptBlur.bind(this)
    this.promptFocus = this.promptFocus.bind(this)
    this.promptEnter = this.promptEnter.bind(this)
    this.promptChange = this.promptChange.bind(this)

    this.mouseClick = this.mouseClick.bind(this)
    this.addMenuItem = this.addMenuItem.bind(this)
    this.addActivityItem = this.addActivityItem.bind(this)
  }

  static promptInterval = null

  prompt (promptValue) {
    let prompAux = ''
    const prompInputText = './'
    clearInterval(this.promptInterval)
    promptValue.split('').forEach((char, i) => {
      window.setTimeout(() => {
        prompAux += char
        this.setState({prompt: prompInputText + prompAux})
        if (i === promptValue.length - 1) {
          this.promptFocus()
        }
      }, 200 * i)
    })
  }

  promptFocus () {
    const promptInput = this.refs.prompt
    const promptCaret = this.refs.caret

    promptInput.focus()
    this.promptInterval = window.setInterval(() => {
      if (promptCaret.style.visibility === 'visible') {
        promptCaret.style.visibility = 'hidden'
      } else {
        promptCaret.style.visibility = 'visible'
      }
    }, 250)
  }

  promptBlur () {
    const promptCaret = this.refs.caret
    clearInterval(this.promptInterval)
    promptCaret.style.visibility = 'visible'
  }

  promptChange () {
    const promptInput = this.refs.prompt
    this.setState({prompt: promptInput.value})
  }

  promptEnter (e) {
    e.preventDefault()
    const command = this.state.prompt.replace('./', '')
    const promptActions = {
      'exit': () => {
        this.setState({compact: false, section: '', prompt: ''})
      },
      'twitter': () => {
        console.log('Twitter!')
      }
    }

    const promptNotFound = () => {
      const tempPrompt = this.state.prompt
      this.setState({prompt: 'Error: Command not found.', promptValid: false})
      setTimeout(() => {
        this.setState({prompt: tempPrompt, promptValid: true})
      }, 666)
    }

    if (promptActions.hasOwnProperty(command)) {
      promptActions[command]()
    } else {
      promptNotFound()
    }
  }

  mouseClick (section) {
    const compact = (section === '' || this.state.section === '') ? !this.state.compact : this.state.compact
    this.setState({
      compact,
      section
    })
    this.prompt(section)
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
            : <span
                 className={classNames({
                   [styles.AboutCard__SocialLinks__Link__Text]: true,
                   [styles['AboutCard__SocialLinks__Link__Text--active']]: this.state.section === item.title.toLowerCase()
                 })}>
              {item.title}
              </span>
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
                <form className={styles.AboutCard__Prompt} onSubmit={this.promptEnter}>
                  <div className={classNames({
                    [styles.AboutCard__Prompt__CMD]: true,
                    [styles['AboutCard__Prompt__CMD--error']]: !this.state.promptValid
                  })} onClick={this.promptFocus}>
                    <span className={styles.AboutCard__Prompt__Symbol}>»</span>
                    <span className={styles.AboutCard__Prompt__CMD__Input}>{this.state.prompt}</span>
                    <div ref='caret' className={styles.AboutCard__Prompt__CMD__Caret}></div>
                  </div>
                  <input ref='prompt' type='text' value={this.state.prompt} onChange={this.promptChange} onBlur={this.promptBlur} />
                </form>
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
