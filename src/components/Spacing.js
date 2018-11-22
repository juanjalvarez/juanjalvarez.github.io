import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: props => ({
    minWidth: [props.width, props.size, 50].find(v => v !== undefined),
    minHeight: [props.height, props.size, 50].find(v => v !== undefined)
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
