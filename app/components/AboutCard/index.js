import React from 'react'

import styles from './styles.css'

function AboutCard () {
  return (
    <section className={styles.AboutCard}>
      <div>
        <p>
          Made with love by <a href='https://github.com/rogr'>Rogelio</a>.
        </p>
      </div>
    </section>
  )
}

export default AboutCard
