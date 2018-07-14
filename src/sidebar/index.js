import React from 'react'
import injectSheet from 'react-jss'

import ProfilePicture from './atoms/ProfilePicture'

const styles = {
  container: {
    position: 'fixed',
    backgroundColor: 'red'
  }
}

const Sidebar = ({
  classes
}) => (
  <nav className={classes.container}>
    <ProfilePicture />
  </nav>
)

export default injectSheet(styles)(Sidebar)
