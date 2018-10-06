import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const overlayRoot = document.getElementById('overlay-root')

export default class Overlay extends Component {

  static propTypes = {
    children: PropTypes.element
  }

  element = document.createElement('div')

  constructor() {
    super()
    overlayRoot.appendChild(this.element)
  }

  componentWillUnmount = () => this.element.remove()

  render = () => ReactDOM.createPortal(this.props.children, this.element)
}
