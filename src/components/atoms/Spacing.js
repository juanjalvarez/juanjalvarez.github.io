import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: props => ({
    minWidth: props.width || props.size,
    minHeight: props.height || props.size
  })
}

const Spacing = props => <div className={props.classes.container} />

Spacing.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  size: PropTypes.any,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Spacing)
