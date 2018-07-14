import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ClosedSidebar from '../molecules/ClosedSidebar'
import OpenSidebar from '../molecules/OpenSidebar'

const styles = {
  container: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 5
  }
}

class Sidebar extends Component {

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
            <OpenSidebar onToggleSidebar={this.handleToggleSidebar} />
          ) : (
            <ClosedSidebar onToggleSidebar={this.handleToggleSidebar} shouldRenderAnimation={!firstOpened} />
          )
        }
      </nav>
    )
  }
}

export default injectSheet(styles)(Sidebar)
