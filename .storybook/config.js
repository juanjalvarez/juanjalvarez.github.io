import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs, selectV2 } from '@storybook/addon-knobs'
import { ThemeProvider } from 'react-jss'

import * as themes from '../src/themes'

const withBase = next => {
  const theme = selectV2('Theme', themes, 'light')
  return (
    <ThemeProvider theme={themes[theme]}>
      {next()}
    </ThemeProvider>
  )
}

addDecorator(withBase)
addDecorator(withKnobs)

const req = require.context('../src', true, /\.story\.js$/)

const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
