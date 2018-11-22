import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import moment from 'moment'

import ProfilePicture from './ProfilePicture'

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
    animation: props => (props.shouldRenderAnimation && !props.alreadyAnimatedToday) ? 'slide 3s forwards' : '',
    '@media (max-width: 500px)': {
      top: 0,
      right: -40
    }
  },
  name: {
    width: 180,
    bottom: -40,
    margin: 0,
    position: 'absolute',
    opacity: 0,
    animation: props => (props.shouldRenderAnimation && !props.alreadyAnimatedToday) ? 'name-slide 3s forwards' : ''
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
      top: window.innerWidth < 501 ? 0 : 60,
      right: window.innerWidth < 501 ? -40 : 100,
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
  alreadyAnimatedToday: PropTypes.bool
}

const mapStateToProps = state => ({
  alreadyAnimatedToday: state.app.lastAccessed === moment().format('YYYY-MM-DD')
})

export default connect(mapStateToProps)(
  injectSheet(styles)(ClosedNav)
)
