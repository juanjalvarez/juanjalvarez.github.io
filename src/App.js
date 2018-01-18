import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Main from './Main'
import About from './About'
import Experience from './Experience'
import Knowledge from './Knowledge'
import Projects from './Projects'
import Contact from './Contact'

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
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}
