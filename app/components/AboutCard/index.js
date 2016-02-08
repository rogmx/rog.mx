import React from 'react'

import styles from './styles.css'
import avatar from './images/me.png'

function AboutCard () {
  return (
    <section className={styles.AboutCard}>
      <div className={styles.AboutCard__Bio}>
        <img src={avatar} className={styles.AboutCard__Bio__Avatar} />
        <div className={styles.AboutCard__Bio__Info}>
          <h2 className={styles.AboutCard__Bio__Info__Title}>Rogelio Alberto</h2>
          <p className={styles.AboutCard__Bio__Info__Subtitle}>Web Developer</p>
        </div>
      </div>
      <div className={styles.AboutCard__SocialLinks}>
        <ul>
          <li>
            <a href='http://twitter.com/rog3r'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg' />
            </a>
          </li>
          <li>
            <a href='http://instagram.com/kantorpweglin'>
              <img src='http://raziraz.github.io/codepen/img/instagram-icon.svg' />
            </a>
          </li>
          <li>
            <a href='http://codepen.io/razitazi'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutCard
