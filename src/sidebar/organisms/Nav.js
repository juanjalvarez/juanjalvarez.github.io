import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ClosedNav from '../molecules/ClosedNav'
import OpenNav from '../molecules/OpenNav'

const styles = {
  container: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 5,
    color: '#4A4A4A',
    userSelect: 'none'
  }
}

class Nav extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    isOpen: false,
    firstOpened: false
  }

  handleToggleSidebar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      firstOpened: true
    })
  }

  render() {
    const {
      classes
    } = this.props
    const {
      isOpen,
      firstOpened
    } = this.state
    return (
      <nav className={classes.container}>
        {
          isOpen ? (
            <OpenNav onToggleSidebar={this.handleToggleSidebar} />
          ) : (
            <ClosedNav onToggleSidebar={this.handleToggleSidebar} shouldRenderAnimation={!firstOpened} />
          )
        }
      </nav>
    )
  }
}

export default injectSheet(styles)(Nav)
