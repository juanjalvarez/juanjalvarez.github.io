import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import withTests from '../../utils/withTests'

import Text from './Text'

import localization from '../localization.json'
const strings = {}
for (const key of Object.keys(localization.strings)) {
  strings[key] = key
}

const component = 'Text'

const story = storiesOf('Localization', module)

story.addDecorator(withTests(component))

story.add(component, () => <Text name={select('Text', strings, 'test_text')} />)
