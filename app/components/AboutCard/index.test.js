import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import AboutCard from './index'

describe('<AboutCard />', () => {
  it('should render the About Card', () => {
    const renderedComponent = shallow(
      <AboutCard />
    )
    expect(renderedComponent.contains(
      <section>
        <p>
          Made with love by <a href='https://github.com/rogr'>Rogelio</a>.
        </p>
      </section>
    )).toEqual(true)
  })
})
