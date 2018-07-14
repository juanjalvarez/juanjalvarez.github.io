import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ProfilePicture from './ProfilePicture'

const story = storiesOf('ProfilePicture', module)

story.add('default', () => <ProfilePicture onClick={action('clicked')} />)
