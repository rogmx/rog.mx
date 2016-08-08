import { h, Component } from 'preact'  // eslint-disable-line
import classNames from 'classnames'

import style from './style'

import Logo from '../Logo'
import Avatar from './images/me.png'

export default class AboutCard extends Component {
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
            </div>
            : null
          }
        </div>
        <div className={style.AboutCard__Sidebar}>
          <a href='#'><Logo /></a>
          <div className={style.AboutCard__Sidebar__SocialLinks__Wrapper}>
            <ul className={style.AboutCard__Sidebar__SocialLinks}>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
