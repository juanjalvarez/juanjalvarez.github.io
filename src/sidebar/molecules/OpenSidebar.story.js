import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import OpenSidebar from './OpenSidebar'

const component = 'OpenSidebar'

const story = storiesOf('Sidebar', module)

story.addDecorator(withTests(component))

story.add(component, () => <OpenSidebar onClick={action('clicked')} />)
