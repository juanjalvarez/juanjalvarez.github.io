import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './Main'
import NavBar from './NavBar'

import './index.css'

ReactDOM.render(
  <Router>
    <div className="rootContainer">
      <NavBar />
      <Route exact path="/" component={Main} />
    </div>
  </Router>,
  document.getElementById('root')
)
