import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

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

const NavItem = ({
  classes,
  className,
  children,
  to
}) => (
  <Link to={to} className={[classes.container, className].join(' ')}>{children}</Link>
)

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  to: PropTypes.string
}

export default injectSheet(styles)(NavItem)
