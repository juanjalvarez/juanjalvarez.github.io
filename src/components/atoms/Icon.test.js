import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

it('renders closed sidebar', () => {
  const elem = shallow(<Icon name="cog" />)
  expect(elem.prop('name')).toBe('cog')
})
