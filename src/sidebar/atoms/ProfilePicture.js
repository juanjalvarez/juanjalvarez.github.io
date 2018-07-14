import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: {
    borderRadius: '50%',
    width: 150,
    height: 150,
    overflow: 'hidden',
    backgroundImage: 'url(images/face.jpg)',
    backgroundSize: 'cover',
    boxShadow: '0px 3px 10px black'
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
