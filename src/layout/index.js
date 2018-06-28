import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
})

const Layout = ({
  children,
  classes
}) => (
  <div className={classes.container}>
    <div>sidebar</div>
    <div>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Layout)
