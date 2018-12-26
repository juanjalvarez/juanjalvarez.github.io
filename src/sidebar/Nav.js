import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../app/actions'

import ClosedNav from './ClosedNav'
import OpenNav from './OpenNav'

const styles = {
  container: {
    position: 'fixed',
    zIndex: 10,
    color: '#4A4A4A',
    userSelect: 'none'
  }
}

class Nav extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
    setIsNavOpen: PropTypes.func.isRequired,
  }

  state = {
    firstOpened: false,
  }

  handleToggleSidebar = () => {
    const { setIsNavOpen, isNavOpen } = this.props
    this.setState({
      firstOpened: true
    })
    setIsNavOpen(!isNavOpen)
  }

  render() {
    const {
      classes,
      isNavOpen,
    } = this.props
    const {
      firstOpened
    } = this.state
    return (
      <nav className={classes.container}>
        {
          isNavOpen ? (
            <OpenNav onToggleSidebar={this.handleToggleSidebar} />
          ) : (
            <ClosedNav onToggleSidebar={this.handleToggleSidebar} shouldRenderAnimation={!firstOpened} />
          )
        }
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  isNavOpen: state.app.isNavOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles)(Nav)
)
