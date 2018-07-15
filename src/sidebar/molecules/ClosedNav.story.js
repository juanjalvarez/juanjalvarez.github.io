import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import ClosedNav from './ClosedNav'

const component = 'ClosedNav'

const story = storiesOf('Nav', module)

story.addDecorator(withTests(component))

story.add(component, () => <ClosedNav onClick={action('clicked')} />)
