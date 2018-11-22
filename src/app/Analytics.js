import { Component } from 'react'
import PropTypes from 'prop-types'
import analytics from '../utils/analytics'

const analyticsEnabled = Boolean(process.env['REACT_APP_ANALYTICS_ENABLED'])

const pageview = path => {
  if (analyticsEnabled) {
    analytics.pageview(path).send()
  }
}

export default class Analytics extends Component {

  static propTypes = {
    children: PropTypes.element
  }

  location = window.location.pathname

  componentDidUpdate = () => {
    if (this.location !== window.location.pathname) {
      this.location = window.location.pathname
      pageview(this.location)
    }
  }

  render = () => {
    return this.props.children
  }
}
