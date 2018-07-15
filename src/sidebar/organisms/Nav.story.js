import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import Nav from './Nav'

const component = 'Nav'

const story = storiesOf('Nav', module)

story.addDecorator(withTests(component))

story.add(component, () => <Nav onClick={action('clicked')} />)
