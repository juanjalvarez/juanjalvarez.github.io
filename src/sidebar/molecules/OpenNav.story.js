import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import OpenNav from './OpenNav'

const component = 'OpenNav'

const story = storiesOf('Nav', module)

story.addDecorator(withTests(component))

story.add(component, () => <OpenNav onClick={action('clicked')} />)
