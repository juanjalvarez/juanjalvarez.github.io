import React from 'react'
import { mount } from 'enzyme'

import NavItem from './NavItem'

describe('NavItem', () => {
  const elem = mount(<NavItem>Saluton, mondo!</NavItem>)
  it('renders nav item correctly', () => {
    expect(elem.text()).toEqual('Saluton, mondo!')
  })
})
