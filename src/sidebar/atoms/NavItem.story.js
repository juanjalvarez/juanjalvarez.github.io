import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import withTests from '../../utils/withTests'

import NavItem from './NavItem'

const component = 'NavItem'

const story = storiesOf('Nav', module)

story.addDecorator(withTests(component))

story.add(component, () => {
  const displayText = text('text', 'Saluton, mondo!')
  return <NavItem to="/">{displayText}</NavItem>
})
