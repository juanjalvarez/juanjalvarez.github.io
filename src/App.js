import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Main from './Main'
import Bio from './Bio'

import './App.css'

export default class App extends Component {

  state = {
    navOpen: false
  }

  handleNavToggle = status => {
    console.log(status)
    this.setState({
      navOpen: status
    })
  }

  render() {
    const { navOpen } = this.state
    return (
      <Router>
        <div className={`app-container ${navOpen ? 'app-noscroll' : ''}`}>
          <NavBar handleToggle={this.handleNavToggle} />
          <Route exact path="/" component={Main} />
          <Route path="/bio" component={Bio} />
        </div>
      </Router>
    )
  }
}
