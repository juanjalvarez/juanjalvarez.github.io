import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../app/actions'

const styles = {
  container: {
    fontSize: 32,
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}

class NavItem extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    to: PropTypes.string,
    history: PropTypes.object.isRequired,
    setIsNavOpen: PropTypes.func.isRequired,
  }

  handleClick = e => {
    e.preventDefault()
    const{ history, to, setIsNavOpen } = this.props
    history.push(to)
    if (window.innerWidth < 501) {
      setIsNavOpen(false)
    }
  }

  render() {
    const {
      classes,
      className,
      children,
    } = this.props
    return (
      <a href="" onClick={this.handleClick} className={[classes.container, className].join(' ')}>{children}</a>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(
  withRouter(
    injectSheet(styles)(NavItem)
  )
)
