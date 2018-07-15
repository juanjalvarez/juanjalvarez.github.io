import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs, selectV2 } from '@storybook/addon-knobs'

import * as themes from '../src/themes'

import Base from '../src/app/templates/Base'

const withBase = next => {
  const theme = selectV2('Theme', themes, 'light')
  return <Base>{next()}</Base>
}

addDecorator(withBase)
addDecorator(withKnobs)

const req = require.context('../src', true, /\.story\.js$/)

const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
