import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: {
    borderRadius: '50%',
    minWidth: 120,
    minHeight: 120,
    overflow: 'hidden',
    backgroundImage: 'url(/images/face.svg)',
    backgroundSize: 'cover',
  }
}

const ProfilePicture = props => {
  const {
    classes,
    className
  } = props
  return (
    <div {...props} className={[classes.container, className].join(' ')} />
  )
}

ProfilePicture.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default injectSheet(styles)(ProfilePicture)
