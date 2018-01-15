import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Main from './Main'
import Bio from './Bio'

import './index.css'

ReactDOM.render(
  <Router>
    <div className="root-container">
      <NavBar />
      <Route exact path="/" component={Main} />
      <Route path="/bio" component={Bio} />
    </div>
  </Router>,
  document.getElementById('root')
)
