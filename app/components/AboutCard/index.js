import React from 'react'

import styles from './styles.css'
import Avatar from './images/me.png'

import Icon from '../Icons/Icon'
import IconTwitter from '../Icons/twitter'
import IconGithub from '../Icons/github'
import IconMusic from '../Icons/music'

function AboutCard () {
  return (
    <section className={styles.AboutCard}>
      <div className={styles.AboutCard__Bio}>
        <img src={Avatar} className={styles.AboutCard__Bio__Avatar} />
        <div className={styles.AboutCard__Bio__Info}>
          <h2 className={styles.AboutCard__Bio__Info__Title}>Rogelio Alberto</h2>
          <p className={styles.AboutCard__Bio__Info__Subtitle}>Web Developer</p>
        </div>
      </div>
      <div className={styles.AboutCard__SocialLinks}>
        <ul className={styles.AboutCard__SocialLinks__List}>
          <li className={styles.AboutCard__SocialLinks__List__Item}>
            <a className={styles.AboutCard__SocialLinks__Link} href='http://twitter.com/rog3r'>
              <Icon icon={IconTwitter} svgclass={styles.AboutCard__SocialLinks__Link__Icon} />
            </a>
          </li>
          <li className={styles.AboutCard__SocialLinks__List__Item}>
            <a className={styles.AboutCard__SocialLinks__Link} href='http://github.com/rogr'>
              <Icon icon={IconGithub} svgclass={styles.AboutCard__SocialLinks__Link__Icon} />
            </a>
          </li>
          <li className={styles.AboutCard__SocialLinks__List__Item}>
            <a className={styles.AboutCard__SocialLinks__Link} href='http://last.fm/user/rog3r'>
              <Icon icon={IconMusic} svgclass={styles.AboutCard__SocialLinks__Link__Icon} />
            </a>
          </li>
          <li className={styles.AboutCard__SocialLinks__List__Item}>
            <a className={styles.AboutCard__SocialLinks__Link} href='#'>
              <span className={styles.AboutCard__SocialLinks__Link__Text}>Blog</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutCard
