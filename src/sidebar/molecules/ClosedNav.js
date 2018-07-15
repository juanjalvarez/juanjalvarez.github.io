import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ProfilePicture from '../atoms/ProfilePicture'

const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    top: 60,
    right: 100,
    cursor: 'pointer',
    '@media (max-width: 500px)': {
      top: 20,
      right: 20
    }
  },
  containerAnimated: {
    animation: 'slide 3s forwards',
  },
  name: {
    width: 180,
    bottom: -40,
    margin: 0,
    position: 'absolute',
    opacity: 0
  },
  nameAnimated: {
    animation: 'name-slide 3s forwards'
  },
  picture: {
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 50%)'
  },
  '@keyframes slide': {
    '0%': {
      top: (window.innerHeight / 2) - 60,
      right: (window.innerWidth / 2) - 60
    },
    '75%': {
      top: (window.innerHeight / 2) - 60,
      right: (window.innerWidth / 2) - 60
    },
    '100%': {
      top: window.innerWidth < 501 ? 20 : 60,
      right: window.innerWidth < 501 ? 20 : 100,
    }
  },
  '@keyframes name-slide': {
    '0%': {
      opacity: 1
    },
    '66%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    },
  }
}

const ClosedNav = props => {
  const {
    classes,
    className,
    onToggleSidebar,
    shouldRenderAnimation
  } = props
  const renderAnim = shouldRenderAnimation
  return (
    <div
      className={[
        classes.container,
        renderAnim ? classes.containerAnimated : '',
        className
      ].join(' ')}
    >
      <ProfilePicture className={classes.picture} onClick={onToggleSidebar} />
      <h2
        className={[
          classes.name,
          renderAnim ? classes.nameAnimated : ''
        ].join(' ')}
      >
        Juan J. Alvarez
      </h2>
    </div>
  )
}

ClosedNav.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onToggleSidebar: PropTypes.func,
  shouldRenderAnimation: PropTypes.bool
}

export default injectSheet(styles)(ClosedNav)
