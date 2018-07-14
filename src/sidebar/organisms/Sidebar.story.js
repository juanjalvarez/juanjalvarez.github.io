import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import Sidebar from './Sidebar'

const component = 'Sidebar'

const story = storiesOf('Sidebar', module)

story.addDecorator(withTests(component))

story.add(component, () => <Sidebar onClick={action('clicked')} />)
