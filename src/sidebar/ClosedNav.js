import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import ProfilePicture from './ProfilePicture'

const position = {
  mobile: {
    top: 5,//0,
    right: 5//-40,
  },
  desktop: {
    top: 60,
    right: 100,
  },
}

const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    top: position.desktop.top,
    right: position.desktop.right,
    animation: props => (props.shouldRenderAnimation && props.shouldRenderInitialAnimation) ? 'slide 3s forwards' : '',
    '@media (max-width: 500px)': {
      top: position.mobile.top,
      right: position.mobile.right
    },
  },
  name: {
    width: 180,
    bottom: -40,
    margin: 0,
    position: 'absolute',
    opacity: 0,
    animation: props => (props.shouldRenderAnimation && props.shouldRenderInitialAnimation) ? 'name-slide 3s forwards' : ''
  },
  picture: {
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 50%)',
    transitionDuration: '0.1s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
      transitionDuration: '0.1s',
    },
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
      top: window.innerWidth < 501 ? position.mobile.top : position.desktop.right,
      right: window.innerWidth < 501 ? position.mobile.right : position.desktop.right,
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
    onToggleSidebar
  } = props
  return (
    <div
      className={[
        classes.container,
        className
      ].join(' ')}
    >
      <ProfilePicture className={classes.picture} onClick={onToggleSidebar} />
      <h2 className={classes.name}>Juan J. Alvarez</h2>
    </div>
  )
}

ClosedNav.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onToggleSidebar: PropTypes.func,
  shouldRenderAnimation: PropTypes.bool,
  shouldRenderInitialAnimation: PropTypes.bool
}

const mapStateToProps = state => ({
  shouldRenderInitialAnimation: state.app.shouldRenderInitialAnimation
})

export default connect(mapStateToProps)(
  injectSheet(styles)(ClosedNav)
)
