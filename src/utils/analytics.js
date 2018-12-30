import * as uuid from 'uuid'
import { Visitor } from 'universal-analytics'

let visitorId = localStorage.getItem('visitorId')
if (!visitorId) {
  visitorId = uuid.v4()
  localStorage.setItem('visitorId', visitorId)
}

const analytics = new Visitor(process.env['REACT_APP_GOOGLE_ANALYTICS_APP_ID'], visitorId)

const analyticsEnabled = window.location.origin.indexOf(process.env['REACT_APP_PRODUCTION_ORIGIN']) !== -1
console.log(`Pageview analytics are ${analyticsEnabled ? 'enabled' : 'disabled'}`)

const pageview = path => {
  if (analyticsEnabled) {
    analytics.pageview(path).send()
  } else {
    console.log(`Ignoring pageview analytics for: ${path}`)
  }
}

export default location => pageview(location.pathname)
