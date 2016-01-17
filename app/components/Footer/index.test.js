import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import Footer from './index'

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    )
    expect(renderedComponent.contains(
      <section>
        <p>
          This project is licensed under the Beerware license.
        </p>
      </section>
    )).toEqual(true)
  })

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />)
    expect(renderedComponent.contains(
      <section>
        <p>
          Made with love by <a href="https://github.com/rogr">Rogelio</a>.
        </p>
      </section>
    )).toEqual(true)
  })
})
