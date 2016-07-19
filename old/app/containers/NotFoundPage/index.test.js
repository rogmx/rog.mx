/**
 * Testing the NotFoundPage
 */

import expect from 'expect'
import { shallow, mount } from 'enzyme'
import React from 'react'

import { NotFound } from './index'

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    )
    expect(renderedComponent.contains(<h1>Page not found.</h1>)).toEqual(true)
  })

  it('should render a button', () => {
    const renderedComponent = shallow(
      <NotFound />
    )
    const renderedButton = renderedComponent.find('button')
    expect(renderedButton.length).toEqual(1)
  })

  it('should link to "/"', () => {
    const changeRouteSpy = expect.createSpy()
    const onChangeRoute = (dest) => {
      if (dest === '/') {
        changeRouteSpy()
      }
    }

    const renderedComponent = mount(
      <NotFound changeRoute={onChangeRoute} />
    )
    const button = renderedComponent.find('button')
    button.simulate('click')
    expect(changeRouteSpy).toHaveBeenCalled()
  })
})
