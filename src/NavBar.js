import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-fa'

import './NavBar.css'

export default class NavBar extends Component {

  state = {
    isOpen: false
  }

  handleToggleMenu = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }
  
  render() {
    const { isOpen } = this.state
    return (
      <div className="navbar-container">
        <div className="navbar-burger" onClick={this.handleToggleMenu}>
          {
            isOpen ?
            <Icon name="times" />
            :
            <Icon name="bars" />
          }
        </div>
        <div className="navbar-header">
          <img
            src="images/face.jpg"
            className="navbar-face-img"
          />
          <div className="navbar-name">Juan J. Alvarez</div>
        </div>
        <div className={`navbar-list ${isOpen ? 'navbar-responsive' : ''}`}>
          <Link to="/bio" className="navbar-link">
            <div className="navbar-item">Bio</div>
          </Link>
          <Link to="/experience" className="navbar-link">
            <div className="navbar-item">Experience</div>
          </Link>
          <Link to="/projects" className="navbar-link">
            <div className="navbar-item">Projects</div>
          </Link>
          <Link to="/knowledge" className="navbar-link">
            <div className="navbar-item">Knowledge</div>
          </Link>
          <Link to="/contact" className="navbar-link">
            <div className="navbar-item">Contact</div>
          </Link>
        </div>
      </div>
    )
  }
}
