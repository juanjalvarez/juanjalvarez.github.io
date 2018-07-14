import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

export default class Overlay extends Component {

  static propTypes = {
    children: PropTypes.element
  }

  element = document.createElement('div')

  constructor() {
    super()
    modalRoot.appendChild(this.element)
  }

  componentWillUnmount() {
    this.element.remove()
  }

  render = () => ReactDOM.createPortal(this.props.children, this.element)
}
