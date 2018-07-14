import React from 'react'
import { mount } from 'enzyme'

import ProfilePicture from '../atoms/ProfilePicture'
import Sidebar from './Sidebar'

it('renders closed sidebar', () => {
  const elem = mount(<Sidebar />)
  const picture = elem.find(ProfilePicture).last()
  picture.simulate('click')
  expect(elem.children()).toHaveLength(1)
})
