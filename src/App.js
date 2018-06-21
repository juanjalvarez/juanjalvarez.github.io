import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import NavBar from './NavBar'
import Main from './Main'
import About from './About'
import Experience from './Experience'
import Knowledge from './Knowledge'
import Projects from './Projects'
import Contact from './Contact'
import analytics from './analytics'

import './App.css'

class App extends Component {

  state = {
    navOpen: false
  }

  lastNavigation = new Date()

  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const now = new Date()
      analytics.timing('Page duration', prevProps.location.pathname, now - this.lastNavigation)
      analytics.pageview(this.props.location.pathname).send()
      this.lastNavigation = now
    }
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
      <div className={`app-container ${navOpen ? 'app-noscroll' : ''}`}>
        <NavBar handleToggle={this.handleNavToggle} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/knowledge" component={Knowledge} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}

export default withRouter(App)
