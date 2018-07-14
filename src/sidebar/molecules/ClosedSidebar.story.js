import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import ClosedSidebar from './ClosedSidebar'

const component = 'ClosedSidebar'

const story = storiesOf('Sidebar', module)

story.addDecorator(withTests(component))

story.add(component, () => <ClosedSidebar onClick={action('clicked')} />)
