import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Main.css'

export default class Main extends Component {

  state = {
    text: ''
  }

  queue = [
    "I'm primarily frontend developer",
    "I am currently expanding my backend knowledge",
    "My goal is to become an experienced full-stack developer"
  ]

  constructor() {
    super()
    this.timeout = null
  }

  componentDidMount() {
    this.changeText(this.queue[0], 0, false)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  changeText = (str = '', idx = 0, back = false) => {
    const substr = str.substr(0, idx)
    this.setState({
      text: substr
    })
    let cb = () => undefined
    let delay = 75
    if (back) {
      const startsWith = this.queue[1].startsWith(substr)
      if (idx === 0 || startsWith) {
        const val = this.queue[0]
        this.queue.push(val)
        this.queue.splice(0, 1)
        cb = () => this.changeText(this.queue[0], 0, false)
        delay = 1000
        if (startsWith) {
          cb = () => this.changeText(this.queue[0], idx, false)
        }
      } else {
        cb = () => this.changeText(this.queue[0], idx - 1, true)
        delay = 25
      }
    } else {
      if (idx === str.length) {
        cb = () => this.changeText(this.queue[0], idx - 1, true)
        delay = 1000
      } else {
        cb = () => this.changeText(this.queue[0], idx + 1, false)
        const lastChar = this.queue[0].charAt(idx - 1)
        if (lastChar === ',') {
          delay += 1000
        }
        if (lastChar === '.') {
          delay += 500
        }
      }
    }
    this.timeout = setTimeout(cb, delay)
  }

  render() {
    return (
      <div className="main-container">
        <img
          src="images/face.jpg"
          className="navbar-face-img main-face"
          alt=""
        />
        <div className="main-dynamic">{this.state.text}</div>
        <Link to="/about" className="main-button">Get To Know Me</Link>
      </div>
    )
  }
}
