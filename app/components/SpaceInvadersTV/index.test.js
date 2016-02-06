import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import SpaceInvadersTV from './index'

describe('<SpaceInvadersTV />', () => {
  it('should render the About Card', () => {
    const renderedComponent = shallow(
      <SpaceInvadersTV />
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
