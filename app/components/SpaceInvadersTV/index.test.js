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
        Hey!
      </section>
    )).toEqual(true)
  })
})
