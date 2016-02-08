import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import AboutCard from './index'

import styles from './styles.css'
import Avatar from './images/me.png'

describe('<AboutCard />', () => {
  it('should render the About Card', () => {
    const renderedComponent = shallow(
      <AboutCard />
    )
    expect(renderedComponent.contains(
      <div className={styles.AboutCard__Bio}>
        <img src={Avatar} className={styles.AboutCard__Bio__Avatar} />
        <div className={styles.AboutCard__Bio__Info}>
          <h2 className={styles.AboutCard__Bio__Info__Title}>Rogelio Alberto</h2>
          <p className={styles.AboutCard__Bio__Info__Subtitle}>Web Developer</p>
        </div>
      </div>
    )).toEqual(true)
  })
})
