import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import App from '../src/app/app'

const withBase = next => (
  <App>
    {next()}
  </App>
)

addDecorator(withBase)
addDecorator(withKnobs)

const req = require.context('../src/components', true, /\.story\.js$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
