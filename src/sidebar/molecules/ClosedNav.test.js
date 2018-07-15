import React from 'react'
import { shallow } from 'enzyme'

import ClosedNav from './ClosedNav'

describe('ClosedNav', () => {
  it('renders closed sidebar', () => {
    shallow(<ClosedNav />)
  })
})
