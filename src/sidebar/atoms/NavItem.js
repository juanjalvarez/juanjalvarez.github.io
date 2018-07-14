import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: {
    fontSize: 32
  }
}

const NavItem = ({
  classes,
  className,
  children
}) => (
  <span className={[classes.container, className].join(' ')}>{children}</span>
)

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default injectSheet(styles)(NavItem)
