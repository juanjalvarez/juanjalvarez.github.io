import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import analytics from './analytics'

import App from './App'

analytics.pageview('/').send()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
