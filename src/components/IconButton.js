import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Icon from './Icon'

const styles = {
  container: {
    backgroundColor: props => props.background || 'black',
    color: props => props.foreground || 'white',
    fill: props => props.foreground || 'white',
    borderRadius: 5,
    fontSize: 20,
    boxShadow: '0px 4px 10px lightgrey',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer'
  },
  icon: {
    marginRight: 10
  },
  body: {
    flex: 1,
  },
}

const IconButton = ({
  classes,
  className,
  icon,
  children,
  onClick
}) => (
  <div className={[classes.container, className].join(' ')} onClick={onClick}>
    <Icon className={classes.icon} name={icon} size={30} />
    <div className={classes.body}>
      {children}
    </div>
  </div>
)

IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  background: PropTypes.string,
  foreground: PropTypes.string
}

export default injectSheet(styles)(IconButton)
