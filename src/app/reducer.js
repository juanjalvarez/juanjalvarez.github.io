import * as uuid from 'uuid'
import { Visitor } from 'universal-analytics'
import { LOCATION_CHANGE } from 'react-router-redux'

import * as themes from '../themes'

let visitorId = localStorage.getItem('visitorId')
if (!visitorId) {
  visitorId = uuid.v4()
  localStorage.setItem('visitorId', visitorId)
}
const visitor = new Visitor(process.env['REACT_APP_GOOGLE_ANALYTICS_APP_ID'], visitorId)

const analyticsEnabled = Boolean(process.env['REACT_APP_ANALYTICS_ENABLED'])

const pageview = path => {
  if (analyticsEnabled) {
    visitor.pageview(path).send()
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
