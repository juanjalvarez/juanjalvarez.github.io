import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import App from './app/App'

localStorage.setItem('lastAccessed', moment().format('YYYY-MM-DD'))

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
