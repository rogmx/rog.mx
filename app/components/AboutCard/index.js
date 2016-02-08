import React from 'react'

import styles from './styles.css'
import avatar from './images/me.png'

function AboutCard () {
  return (
    <section className={styles.AboutCard}>
      <div className={styles.AboutCard__Bio}>
        <img src={avatar} className={styles.AboutCard__Bio__Avatar} />
        <p>Made with love by <a href='https://github.com/rogr'>Rogelio</a>.</p>
      </div>
      <div className={styles.AboutCard__SocialLinks} />
    </section>
  )
}

export default AboutCard
