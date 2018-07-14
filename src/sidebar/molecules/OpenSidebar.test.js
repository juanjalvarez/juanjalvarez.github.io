import React from 'react'
import { mount } from 'enzyme'

import NavItem from '../atoms/NavItem'
import OpenSidebar from './OpenSidebar'

it('renders closed sidebar', () => {
  const elem = mount(<OpenSidebar />)
  const navItems = elem.find(NavItem)
  expect(navItems).toHaveLength(4)
})
