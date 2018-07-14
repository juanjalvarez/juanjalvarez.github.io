import React from 'react'
import { storiesOf } from '@storybook/react'

import withTests from '../../utils/withTests'

import Icon from './Icon'

const component = 'Icon'

const story = storiesOf('Components', module)

story.addDecorator(withTests(component))

story.add(component, () => <Icon name="cog" />)
