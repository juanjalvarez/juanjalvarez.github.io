import * as uuid from 'uuid'
import { Visitor } from 'universal-analytics'

let visitorId = localStorage.getItem('visitorId')
if (!visitorId) {
  visitorId = uuid.v4()
  localStorage.setItem('visitorId', visitorId)
}

export default new Visitor(process.env['REACT_APP_GOOGLE_ANALYTICS_APP_ID'], visitorId)
