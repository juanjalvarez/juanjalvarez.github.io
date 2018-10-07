import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import injectSheet from 'react-jss'

import Overlay from './Overlay'

import * as appActions from '../../app/actions'

let loaded = false
setTimeout(() => {
  loaded = true
}, 3000)

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: () => loaded ? 'fadein 0.2s forwards' : 'fadein-quick 3s forwards',
    opacity: 0
  },
  body: {
    maxWidth: 700,
    maxHeight: 500,
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    boxShadow: '0px 4px 30px rgba(0, 0, 0,25%)',
    margin: 20,
    padding: 30,
    borderRadius: 10
  },
  '@keyframes fadein': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
}

class Modal extends Component {

  state = {
  }

  static propTypes = {
    setIsBlurred: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    onOutsideClick: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.string
  }

  static getDerivedStateFromProps = props => props.setIsBlurred(true)

  componentWillUnmount = () => this.props.setIsBlurred(false)

  handleOutOfModalClick = () => {
    const onOutsideClick = this.props.onOutsideClick
    if (onOutsideClick) {
      onOutsideClick()
    }
  }

  handleInModalClick = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    const {
      classes,
      className
    } = this.props
    return (
      <Overlay>
        <div className={classes.container} onClick={this.handleOutOfModalClick}>
          <div className={[classes.body, className].join(' ')} onClick={this.handleInModalClick}>
            {this.props.children}
          </div>
        </div>
      </Overlay>
    )
  }
}

const mapActionsToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(null, mapActionsToProps)(
  injectSheet(styles)(Modal)
)
