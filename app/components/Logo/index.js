import React, {PropTypes} from 'react'
import classNames from 'classnames'

import styles from './styles.css'

class Logo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    classLetter: PropTypes.string,
    classLetterAnimated: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      animated: false,
      logoInterval: null,
      flipInvader: false
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  componentDidMount () {
    let firstLogoAnimationCount = 3
    const firstLogoAnimation = setInterval(() => {
      this.animateLogo()
      this.setState({animated: true})
      this.setState({flipInvader: !this.state.flipInvader})
      firstLogoAnimationCount--
      if (firstLogoAnimationCount < 0) {
        clearInterval(firstLogoAnimation)
        this.setState({animated: false})
        this.setState({flipInvader: false})
        this.animateLogo(true)
      }
    }, 435)
  }

  animateLogo (fillAll) {
    let pathCount = 1
    const logo = document.getElementById('logo-rogmx')
    const logoPaths = logo.querySelectorAll('.path-animate')
    const letterDelay = 15
    pathCount = 1
    logoPaths.forEach(path => {
      setTimeout(() => {
        path.style.fillOpacity = (fillAll) ? 1 : (path.style.fillOpacity > 0) ? 0 : 1
      }, 200 + (pathCount * letterDelay))
      pathCount++
    })
  }

  mouseOver () {
    this.setState({animated: true})
    this.animateLogo(false)
    this.state.logoInterval = setInterval(() => {
      this.animateLogo()
      this.setState({flipInvader: !this.state.flipInvader})
    }, 435)
  }

  mouseOut () {
    clearInterval(this.state.logoInterval)
    this.animateLogo(true)
    this.setState({animated: false})
    this.setState({flipInvader: false})
  }

  render () {
    return (
      <div className={styles.Logo} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} >
        <svg
          id={'logo-rogmx'}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 55 310.5'>
          <g>
            <path className={
                this.state.flipInvader ? styles['Logo__Invader--flip'] : styles['Logo__Invader']
              }
              fill={'#fff'} stroke={'none'} d='M12.84 39.25v-5.66H8.66V42H2.39V29.41h4.18v-6.28h4.18V19H17v-4.23h-6.25V8.5H21.2V19h12.55V8.5H44.2v6.27h-6.27V19h6.27v4.18h4.18v6.27h4.18V42h-6.27v-8.41h-4.18v5.35H38l-.08 6.54h5.07v6.38H31.66v-6.51h2.09L33.66 39H21.2v6.58h2.16L23.29 52H11.58l.08-6.34H17l-.08-6.44z' />
            <path className={
                !this.state.flipInvader ? styles['Logo__Invader--flip'] : styles['Logo__Invader']
              }
              fill={'#fff'} stroke={'none'} d='M12.78 39.25v-5.66H8.6v-4.13H2.32V14.69h5.9v8.45h2.47V19H17v-4.23h-6.31V8.5h10.45V19h12.54V8.5h10.46v6.27h-6.27V19h6.27v4.18h2v-8.37h6.38V29.5h-6.29v4.09H42v5.35h-4.06l-.08 6.54h5.07v6.38H31.59v-6.51h2.09L33.59 39H21.14v6.58h2.16L23.23 52H11.52l.08-6.34H17l-.08-6.44z' />
            <path fill={'#010101'} stroke={'#010101'} d='M17.09 24.7h6.27V31h-6.27v-6.3zm14.57 0h6.27V31h-6.27v-6.3z' />
          </g>
          <g id={'letter-r'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })} fill={'#0091FF'} stroke={'#000'} strokeWidth={'1px'} strokeOpacity={'.7'}>
            <path className={'path-animate'} d='M15.27 294.78a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.42-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.42-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58z'/>
            <path className={'path-animate'} d='M15.27 285a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.6zM30 285a2 2 0 1 1-1.39.58A1.9 1.9 0 0 1 30 285zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.6z'/>
            <path className={'path-animate'} d='M15.27 275.2a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.59zm4.9-9.79a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.59zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.59zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.59zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.6zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.6zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.59zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.6zm4.9-9.79a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.6zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.6z'/>
          </g>
          <g id={'letter-o'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })} fill={'#0091FF'} stroke={'#000'} strokeWidth={'1px'} strokeOpacity={'.7'}>
            <path className={'path-animate'} d='M15.27 256.57a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.58z'/>
            <path className={'path-animate'} d='M15.27 246.78a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm24.48-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58z'/>
            <path className={'path-animate'} d='M15.27 237a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.6zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9 0a2 2 0 1 1-1.39.58A1.9 1.9 0 0 1 30 237zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.6z'/>
            <path className={'path-animate'} d='M20.16 232.09a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.43-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58z'/>
          </g>
          <g id={'letter-g'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })} fill={'#0091FF'} stroke={'#000'} strokeWidth={'1px'} strokeOpacity={'.7'}>
            <path className={'path-animate'} d='M15.27 218.36a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.37-.58z'/>
            <path className={'path-animate'} d='M15.27 208.57a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm24.48-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58z'/>
            <path className={'path-animate'} d='M15.27 198.78a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm14.73-9.8a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm4.9-9.79a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.34-.59zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.34-.59zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.34-.59zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.34-.59z'/>
          </g>
          <g id={'letter-dot'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })}>
            <path className={'path-animate'} fill={'#FFF'} d='M30.67 185h-7.15v-7.13h7.15V185zm-2.42-2.42v-2.28h-2.3v2.28h2.3z'/>
          </g>
          <g id={'letter-m'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })} fill={'#0091FF'} stroke={'#000'} strokeWidth={'1px'} strokeOpacity={'.7'}>
            <path className={'path-animate'} d='M15.27 160.28a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58z'/>
            <path className={'path-animate'} d='M15.27 150.49a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.59z'/>
            <path className={'path-animate'} d='M15.27 140.7a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.59zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.59zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.59zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.59zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.59zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.59z'/>
            <path className={'path-animate'} d='M15.27 130.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58z'/>
            <path className={'path-animate'} d='M15.27 126a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.57zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.57zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.42-.57zm0 4.9a2 2 0 1 1-1.39.58A1.9 1.9 0 0 1 30 126zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.57zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.57zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.37-.58z'/>
          </g>
          <g id={'letter-x'} className={classNames({
            [styles.Logo__Letter]: true,
            [styles['Logo__Letter--animated']]: this.state.animated
          })} fill={'#0091FF'} stroke={'#000'} strokeWidth={'1px'} strokeOpacity={'.7'}>
            <path className={'path-animate'} d='M15.27 107.38a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.38-.58zm14.69 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58z'/>
            <path className={'path-animate'} d='M20.16 102.49a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.43-.58zm0 4.9a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.43-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58z'/>
            <path className={'path-animate'} d='M20.16 87.8a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zM30 87.8a2 2 0 1 1-1.39.58A1.9 1.9 0 0 1 30 87.8zm0 4.9a2 2 0 1 1-1.39.58A1.9 1.9 0 0 1 30 92.7zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.34-.58z'/>
            <path className={'path-animate'} d='M15.27 78a2 2 0 1 1-1.39.58 1.9 1.9 0 0 1 1.39-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.39-.58zm4.9 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm14.69 0a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm4.9-4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58zm0 4.9a2 2 0 1 1-1.39.58 1.89 1.89 0 0 1 1.38-.58z'/>
          </g>
        </svg>
      </div>
    )
  }
}

export default Logo
