import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withTests from '../../utils/withTests'

import ProfilePicture from './ProfilePicture'

const component = 'ProfilePicture'

const story = storiesOf('Nav', module)

story.addDecorator(withTests(component))

story.add(component, () => <ProfilePicture onClick={action('clicked')} />)
