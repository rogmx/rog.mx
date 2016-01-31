import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import Background from './index'

describe('<Background />', () => {
  it('should render the About Card', () => {
    const renderedComponent = shallow(
      <Background />
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
