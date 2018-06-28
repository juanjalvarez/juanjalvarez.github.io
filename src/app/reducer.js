import { LOCATION_CHANGE } from 'react-router-redux'

import analytics from './analytics'

import * as themes from '../themes'

const analyticsEnabled = Boolean(process.env['REACT_APP_ANALYTICS_ENABLED'])

const pageview = path => {
  if (analyticsEnabled) {
    analytics.pageview(path).send()
  }
}

const initialState = {
  theme: themes.light
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case LOCATION_CHANGE: {
      pageview(action.payload.pathname)
      return state
    }
    default: {
      return state
    }
  }
}
