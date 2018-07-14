import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: {
    width: 50,
    height: 50
  }
}

const Icon = props => {
  const {
    classes,
    className,
    name
  } = props
  return (
    <img {...props}
      alt=""
      src={`icons/${name}.svg`}
      className={[classes.container, className].join(' ')}
    />
  )
}

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default injectSheet(styles)(Icon)
