import React from 'react'

import styles from './styles.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>
          This project is licensed under the Beerware license.
        </p>
      </section>
      <section>
        <p>
          Made with love by <a href="https://github.com/rogr">Rogelio</a>.
        </p>
      </section>
    </footer>
  )
}

export default Footer
