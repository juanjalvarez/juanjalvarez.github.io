import React from 'react'
import { mount } from 'enzyme'

import ProfilePicture from './ProfilePicture'

it('renders profile picture', () => {
  const elem = mount(<ProfilePicture />)
  expect(elem.children()).toHaveLength(1)
})
